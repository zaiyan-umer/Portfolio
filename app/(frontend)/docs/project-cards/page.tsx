import ComponentDocs from "@/components/ComponentDocs";
import ProjectCardsDemo from "@/ui-components/components/ProjectCards/ProjectsCardsDemo";

const repoBaseUrl = process.env.NEXT_PUBLIC_COMPONENTS_BASE_URL;

const fetchSource = async (path: string) => {
	const response = await fetch(`${repoBaseUrl}${path}`, { cache: "no-store" });
	if (!response.ok) {
		throw new Error(`Failed to fetch ${path} from GitHub`);
	}
	return response.text();
};

export default async function ProjectCardsPage() {
	const [demoCode, sourceCode] = await Promise.all([
		fetchSource("/components/ProjectCards/ProjectsCardsDemo.tsx"),
		fetchSource("/components/ProjectCards/ProjectCards.tsx"),
	]);

	return (
		<ComponentDocs
			title="Project Cards"
			description="Large typographic project rows with floating image previews and subtle motion."
			tags={["Cards", "Motion", "Hover"]}
			preview={
				<div className="bg-black/90 rounded-md p-6">
					<ProjectCardsDemo />
				</div>
			}
			demoCode={demoCode}
			sourceCode={sourceCode}
			sourceUrl="https://github.com/zaiyan-umer/ui-components/blob/main/components/ProjectCards/ProjectCards.tsx"
		/>
	);
}
