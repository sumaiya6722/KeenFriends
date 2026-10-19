# KeenKeeper

KeenKeeper is a small friendship-tracking dashboard for keeping meaningful connections in view. Browse a seeded list of friends, review each person’s contact goal and status, and record call, text, or video check-ins. The app shows those check-ins in a timeline and summarizes them in an interaction chart.

## Features

- Browse friend cards with contact status and relationship goals.
- Open a friend’s profile to see their bio, tags, contact details, and next due date.
- Record a call, text, or video check-in from a friend profile.
- View check-ins in a timeline and see a breakdown by interaction type.
- Navigate between Home, Timeline, and Stats from the responsive navigation bar.

Friend records are currently loaded from `public/data.json`. Check-ins are held in React context in the browser session, so they are not saved to a database and reset when the app state is lost or the page is refreshed. The home page’s summary figures are currently static sample values.

## Getting started

### Requirements

- Node.js (a current LTS release is recommended)
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000/homepage](http://localhost:3000/homepage) to use the dashboard.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js development server using webpack. |
| `npm run build` | Create a production build. |
| `npm run start` | Run the production build locally. |
| `npm run lint` | Run ESLint. |

## App routes

| Route | Description |
| --- | --- |
| `/homepage` | Dashboard banner and seeded friend list. |
| `/friendsDetails/[id]` | Profile and quick check-in actions for a friend. |
| `/timeline` | Check-in history with interaction type filtering. |
| `/stats` | Donut chart of check-ins by type. |

## Project structure

```text
app/
  components/       Reusable friend and timeline cards
  context/          Shared check-in state
  friendsDetails/   Dynamic friend profile route
  homepage/         Dashboard and friend list
  stats/            Interaction analytics
  timeline/         Check-in history
  layout.tsx        Shared app shell, navigation, and provider
public/
  data.json         Seed friend records
```

## Tech stack

- Next.js 16 with the App Router
- React 19
- Tailwind CSS 4 and DaisyUI
- HeroUI components
- Recharts for the analytics chart
- React Toastify for check-in feedback
