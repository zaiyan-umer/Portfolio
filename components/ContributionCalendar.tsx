import React, { useEffect, useMemo, useState } from 'react';

export type ContributionDay = {
  date: string;
  count: number;
};

const intensityClass = (count: number) => {
  if (count === 0) return 'bg-gray-200 dark:bg-gray-800';
  if (count < 3) return 'bg-green-100 dark:bg-green-900/60';
  if (count < 6) return 'bg-green-300 dark:bg-green-800/70';
  if (count < 10) return 'bg-green-500 dark:bg-green-700/80';
  return 'bg-green-700 dark:bg-green-600';
};

const formatDate = (d: Date) => d.toISOString().slice(0, 10);

const ContributionCalendar: React.FC = ({ weeks = 52 }: { weeks?: number }) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((calendar) => {
        // Flatten weeks -> days
        const days = calendar.weeks.flatMap((w: any) => w.contributionDays);
        // Map to { date, count }
        const mapped: ContributionDay[] = days.map((d: any) => ({
          date: d.date,
          count: d.contributionCount,
        }));
        setContributions(mapped);
      })
      .catch(console.error);
  }, []);

  const totalContributions = useMemo(
    () => contributions.reduce((sum, day) => sum + day.count, 0),
    [contributions]
  );


  const totalDays = weeks * 7;
  const today = new Date();
  const contributionMap = React.useMemo(() => {
    const map = new Map<string, number>();
    contributions.forEach(({ date, count }) => {
      map.set(date, count);
    });
    return map;
  }, [contributions]);

  // Build days from oldest to newest
  const days = Array.from({ length: totalDays }, (_, idx) => {
    const day = new Date(today);
    day.setDate(today.getDate() - (totalDays - 1 - idx));
    const key = formatDate(day);
    const count = contributionMap.get(key) ?? 0;
    return { key, count };
  });

  // Chunk into weeks (columns)
  const weeksData: typeof days[] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeksData.push(days.slice(i, i + 7));
  }

  // Month labels (only show when month changes)
  const monthLabels = weeksData.map((week) => {
    const firstDay = week[0];
    const d = new Date(firstDay.key);
    return d.toLocaleString("default", { month: "short" });
  });

  const weekdays = ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <div className="w-full pb-2">
      <div className="mb-2 text-xl text-gray-600 dark:text-gray-300">
        {totalContributions} contributions in the last year
      </div>
      <div className="w-full p-4 inline-flex flex-col gap-2 overflow-x-auto rounded-sm border border-black/10 dark:border-gray-200/20">
        {/* Total contributions */}

        {/* Month labels */}
        <div className="flex items-center text-[10px] text-gray-500 ml-8 gap-1">
          {monthLabels.map((label, idx) => {
            const show = idx === 0 || label !== monthLabels[idx - 1];
            return (
              <span key={idx} className="w-3.5 text-[10px] leading-3">
                {show ? label : ""}
              </span>
            );
          })}
        </div>

        {/* Calendar grid */}
        <div className="flex gap-1">
          <div className="flex flex-col justify-between text-[10px] text-gray-500 mr-2 h-full">
            {weekdays.map((dayLabel, idx) => (
              <span key={idx} className="h-3.5 leading-3">
                {dayLabel}
              </span>
            ))}
          </div>

          <div className="flex gap-1">
            {weeksData.map((week, wIdx) => (
              <div key={wIdx} className="grid grid-rows-7 gap-1">
                {week.map((day) => (
                  <div
                    key={day.key}
                    className={`h-3.5 w-3.5 rounded-sm ${intensityClass(day.count)} transition-transform duration-100 hover:scale-110`}
                    title={`${day.key}: ${day.count} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

};

export default ContributionCalendar;
