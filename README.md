# Emmanuel Adejumo

Personal site for an engineer and builder — experience, involvements, and projects.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- [Fraunces](https://fonts.google.com/specimen/Fraunces) + [Outfit](https://fonts.google.com/specimen/Outfit)
- Deployed on [Vercel](https://vercel.com)

## Features

- **Home** — Hero, experience timeline, involvements, and featured projects
- **Projects** — Full project list at `/projects`
- **Content-driven** — Bio, experience, involvements, projects, and socials live in one data file

## Project layout

```
app/            # Routes and global styles
components/     # UI sections (nav, hero, experience, projects, …)
lib/data.ts     # Site content
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

## License

[MIT](LICENSE)
