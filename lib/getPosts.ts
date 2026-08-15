import { XMLParser } from "fast-xml-parser";
import { Philosophies } from "./data";

function formatDate(pubDate: string) {
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return pubDate;
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function removeElementsByClass(html: string, className: string) {
  const needle = `class="${className}"`;
  let result = html;

  while (true) {
    const classIdx = result.indexOf(needle);
    if (classIdx === -1) break;

    const start = result.lastIndexOf("<div", classIdx);
    if (start === -1) break;

    let depth = 0;
    let i = start;
    let end = -1;

    while (i < result.length) {
      if (result.startsWith("<div", i)) {
        depth += 1;
        i += 4;
        continue;
      }
      if (result.startsWith("</div>", i)) {
        depth -= 1;
        i += 6;
        if (depth === 0) {
          end = i;
          break;
        }
        continue;
      }
      i += 1;
    }

    if (end === -1) break;
    result = result.slice(0, start) + result.slice(end);
  }

  return result;
}

function cleanPostHtml(html: string) {
  return [
    "subscription-widget-wrap-editor",
    "subscription-widget-wrap",
    "image-link-expand",
  ].reduce(removeElementsByClass, html);
}

export async function getPosts() {
  const res = await fetch("https://emmanuel3412.substack.com/feed", {
    next: {
      revalidate: 3600,
    },
  });
  const xml = await res.text();
  const parser = new XMLParser();
  const data = parser.parse(xml);
  const posts = data.rss?.channel.item as
    | {
        guid: string;
        title: string;
        description: string;
        pubDate: string;
        link: string;
        "content:encoded": string;
      }[]
    | undefined;
  const processedPosts: Philosophies = posts?.map((p) => ({
    id: new URL(p.guid).pathname.split("/").filter(Boolean).pop()!,
    title: p.title,
    description: p.description,
    date: formatDate(p.pubDate),
    content: cleanPostHtml(p["content:encoded"] ?? ""),
  }));
  return processedPosts as Philosophies;
}