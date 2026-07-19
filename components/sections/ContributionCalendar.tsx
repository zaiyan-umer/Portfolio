import { cn } from '@/lib/utils';
import { cacheLife } from 'next/cache';

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

const ContributionCalendar = async ({ className, weeks = 52 }: { className?: string; weeks?: number }) => {
  'use cache';
  cacheLife('hours');

  let contributions: ContributionDay[] = [];
  
  if (!process.env.GITHUB_TOKEN || !process.env.GITHUB_USERNAME) {
    console.warn('GITHUB_TOKEN or GITHUB_USERNAME is missing from environment variables. Skipping GitHub fetch.');
  } else {
    try {
      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              user(login: "${process.env.GITHUB_USERNAME}") {
                contributionsCollection {
                  contributionCalendar {
                    weeks {
                      contributionDays {
                        date
                        contributionCount
                        color
                      }
                    }
                  }
                }
              }
            }
          `,
        }),
      });
      
      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`GitHub API responded with ${res.status}: ${errorText}`);
      }
      
      const json = await res.json();
      
      if (json.data && json.data.user) {
        const calendar = json.data.user.contributionsCollection.contributionCalendar;
        const days = calendar.weeks.flatMap((w: any) => w.contributionDays);
        contributions = days.map((d: any) => ({
          date: d.date,
          count: d.contributionCount,
        }));
      }
    } catch (error) {
      console.error('Error fetching github contributions:', error);
    }
  }

  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  const totalDays = weeks * 7;
  const today = new Date();

  const contributionMap = new Map<string, number>();
  contributions.forEach(({ date, count }) => contributionMap.set(date, count));

  // Build days array oldest → newest
  const days = Array.from({ length: totalDays }, (_, idx) => {
    const day = new Date(today);
    day.setDate(today.getDate() - (totalDays - 1 - idx));
    const key = formatDate(day);
    return { key, count: contributionMap.get(key) ?? 0 };
  });

  // Chunk into week columns
  const weeksData: typeof days[] = [];
  for (let i = 0; i < days.length; i += 7) weeksData.push(days.slice(i, i + 7));

  // Month label per week column — only show on first week of a new month
  const monthLabels = weeksData.map((week) =>
    new Date(week[0].key).toLocaleString('default', { month: 'short' }),
  );

  // 7 row labels — empty strings on even rows keep spacing uniform
  const weekdays = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  return (
    <div className={cn('w-full pb-2', className)}>
      {/* Summary */}
      <div className="mb-2 mx-4 text-xl text-gray-600 dark:text-gray-300">
        {totalContributions} contributions in the last year
      </div>

      <div className="calendar-scroll relative overflow-x-auto pr-4 pt-2 pb-3">

        <div className="flex min-w-max">

          <div
            className="sticky left-0 z-20 flex flex-col gap-1 pr-2
                       bg-background"
          >
            {/* Spacer = height of the month-labels row (h-4 = 16 px) + gap-1 (4 px) */}
            <div className="h-4" />
            {weekdays.map((label, i) => (
              <span
                key={i}
                className="h-3 w-6 sm:h-3.5 flex items-center
                           text-[10px] text-gray-500 leading-none"
              >
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-1">

            {/*
             * Month labels row.
             * Each label cell is the same width as a heatmap week column
             * (w-3 / sm:w-3.5) with the same gap-1 → perfect column sync.
             */}
            <div className="flex gap-1 h-4 items-end">
              {weeksData.map((_, wIdx) => {
                const label = monthLabels[wIdx];
                const show = wIdx === 0 || label !== monthLabels[wIdx - 1];
                return (
                  <div key={wIdx} className="w-3 sm:w-3.5 shrink-0">
                    <span className="block text-[10px] text-gray-500 leading-none">
                      {show ? label : ''}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Heatmap grid — flex row of week columns */}
            <div className="flex gap-1">
              {weeksData.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1">
                  {week.map((day) => (
                    <div
                      key={day.key}
                      className={cn(
                        'h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-sm shrink-0',
                        intensityClass(day.count),
                        'transition-transform duration-150 hover:scale-125 cursor-default',
                      )}
                      title={`${day.key}: ${day.count} contribution${day.count !== 1 ? 's' : ''}`}
                    />
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionCalendar;
