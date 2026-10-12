<div align="center">

# Push Notification

<p>A minimal Next.js demo for subscribing to browser push notifications and sending a test notification with the Web Push API.</p>

<p>
  <a href="https://github.com/nosibbiswas22/push-notification/stargazers">
    <img src="https://img.shields.io/github/stars/nosibbiswas22/push-notification?style=flat-square" alt="GitHub stars">
  </a>
  <a href="https://github.com/nosibbiswas22/push-notification/network/members">
    <img src="https://img.shields.io/github/forks/nosibbiswas22/push-notification?style=flat-square" alt="GitHub forks">
  </a>
  <a href="https://github.com/nosibbiswas22/push-notification/issues">
    <img src="https://img.shields.io/github/issues/nosibbiswas22/push-notification?style=flat-square" alt="GitHub issues">
  </a>
  <a href="https://nextjs.org">
    <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js">
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/API/Push_API">
    <img src="https://img.shields.io/badge/Web_Push-API-4285F4?style=flat-square" alt="Web Push API">
  </a>
  <a href="https://github.com/nosibbiswas22/push-notification/blob/main/package.json">
    <img src="https://img.shields.io/badge/Node.js-20%2B-339933?style=flat-square&logo=node.js" alt="Node.js 20 or later">
  </a>
</p>

</div>

## Overview

This project demonstrates the basic browser push-notification flow:

1. Register a service worker.
2. Subscribe the browser with a VAPID public key.
3. Save the subscription through a Next.js API route.
4. Send a test notification from the server with `web-push`.

> **Note:** Subscriptions are stored in memory for demonstration purposes and are lost whenever the server restarts. Use a database before deploying this pattern to production.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [Web Push](https://github.com/web-push-libs/web-push)
- Service Worker and Push API

## Getting Started

### Prerequisites

- Node.js 20 or later
- A browser that supports the Push API

### Installation

Clone the repository, install dependencies, and create a local environment file:

```bash
git clone https://github.com/nosibbiswas22/push-notification.git
cd push-notification
npm install
```

Generate a VAPID key pair:

```bash
npx web-push generate-vapid-keys
```

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_VAPID_PUBLIC_KEY=your_public_key
VAPID_PRIVATE_KEY=your_private_key
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), allow notifications, and then send a test notification.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
└── app/
    ├── api/push/route.js   # Save subscriptions and send notifications
    ├── page.js             # Subscribe and send-test controls
    └── layout.js           # Application metadata and layout
public/
└── sw.js                   # Push event handler
```

## Deployment

The app can be deployed to [Vercel](https://vercel.com/). Add the following environment variables to the deployment project before building:

- `NEXT_PUBLIC_VAPID_PUBLIC_KEY`
- `VAPID_PRIVATE_KEY`

For production use, persist subscriptions in a database and add authentication around notification sending.

## License

This project does not currently include a license. Add one before distributing or reusing it publicly.
