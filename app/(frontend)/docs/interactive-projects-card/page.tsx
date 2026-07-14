import ComponentDocs from "@/components/docs/ComponentDocs";
import InteracticeProjectCardsDemo from "@/ui-components/InteractiveProjectCards/InteracticeProjectCardsDemo";

const repoBaseUrl = process.env.NEXT_PUBLIC_COMPONENTS_BASE_URL;

const fetchSource = async (path: string) => {
	const response = await fetch(`${repoBaseUrl}${path}`, { cache: "no-store" });
	if (!response.ok) {
		throw new Error(`Failed to fetch ${path} from GitHub`);
	}
	return response.text();
};

export default async function InteractiveProjectsCardPage() {
	const [demoCode, sourceCode] = await Promise.all([
		fetchSource(
			"/components/InteractiveProjectCards/InteracticeProjectCardsDemo.tsx"
		),
		fetchSource(
			"/components/InteractiveProjectCards/InteractiveProjectCard.tsx"
		),
	]);

	return (
		<ComponentDocs
			title="Interactive Project Cards"
			description="Flexible project cards with hover depth, motion accents, and strong typography."
			tags={["Cards", "Layout", "Hover"]}
			preview={
				<div className="bg-black/90 rounded-md p-6">
					<InteracticeProjectCardsDemo />
				</div>
			}
			demoCode={demoCode}
			sourceCode={sourceCode}
			sourceUrl="https://github.com/zaiyan-umer/ui-components/blob/main/components/InteractiveProjectCards/InteractiveProjectCard.tsx"
		/>
	);
}
