# Emmanuel Adejumo

This is my personal site — projects, experience, writing, and whatever I’m working on.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Outfit](https://fonts.google.com/specimen/Outfit)
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) for the Substack RSS feed
- Deployed on [Vercel](https://vercel.com)

## Features

- **Home** — Hero, experience timeline, involvements, featured projects, and recent writing
- **Projects** — Full project list at `/projects`
- **Philosophies** — Writing list at `/philosophies`, posts at `/philosophies/[id]`, sourced from my Substack feed
- **Content-driven** — Bio, experience, involvements, projects, and socials live in one data file

## Project layout

```
app/                 # Routes and global styles
app/philosophies/    # Writing index and post pages
components/          # UI sections
lib/data.ts          # Bio, experience, projects, socials
lib/getPosts.ts      # Substack RSS fetch, clean, and map
```

## Getting started

Requires [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script       | Command       |
| ------------ | ------------- |
| Dev          | `pnpm dev`    |
| Production   | `pnpm build` then `pnpm start` |
| Lint         | `pnpm lint`   |

No environment variables are required.

## Editing content

Update [`lib/data.ts`](lib/data.ts) to change bio, experience, involvements, projects, and social links. The UI reads from that file.

Writing is fetched from [https://emmanuel0112.substack.com/feed](https://emmanuel3412.substack.com/feed) in [`lib/getPosts.ts`](lib/getPosts.ts) and revalidated hourly.

## License

[MIT](LICENSE)
