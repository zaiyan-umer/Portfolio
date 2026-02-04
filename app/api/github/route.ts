import { NextResponse } from "next/server";
import { graphql } from "@octokit/graphql";

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionCalendar {
  weeks: Array<{
    contributionDays: ContributionDay[];
  }>;
}

interface GitHubResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: ContributionCalendar;
    };
  };
}

export async function GET() {
  try {
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    const data = await graphqlWithAuth<GitHubResponse>(`
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
    `);

    return NextResponse.json(
      data.user.contributionsCollection.contributionCalendar,
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}
