import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET() {
	const posts = await getCollection("posts");
	return rss({
		title: "Astro Learner | Blog",
		description: "Mon voyage d'apprentissage d'Astro",
		site: "https://astro-tuto-7c6b88.netlify.app",
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/posts/${post.slug}/`,
		})),
		customData: `<language>fr-fr</language>`,
	});
}
