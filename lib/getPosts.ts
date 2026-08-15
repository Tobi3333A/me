import { XMLParser } from "fast-xml-parser";
import { Philosophies } from "./data";

export async function getPosts() {
    const res = await fetch('https://emmanuel3412.substack.com/feed',
        {
            next: {
                revalidate: 3600
            }
        }
    );
    const xml = await res.text();
    const parser = new XMLParser();
    const data = parser.parse(xml);
    const posts = data.rss?.channel.item;
    return posts as Philosophies;
}