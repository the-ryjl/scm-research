import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
  const publications = (await getCollection('publications', ({ data }) => !data.draft)).sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
  return rss({ title: 'Research - Stern Capital Management', description: 'Student-produced investment research and market insights.', site: context.site, items: publications.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.publishedDate, link: `/research/${p.id}/`, categories: [p.data.category, p.data.sector, ...p.data.tags] })), customData: '<language>en-us</language>' });
}
