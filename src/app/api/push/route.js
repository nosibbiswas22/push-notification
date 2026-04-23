import { NextResponse } from 'next/server';
import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:test@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);

// In a real app, you'd save this to a database
let savedSubscription = null;

export async function POST(req) {
  const body = await req.json();

  if (body.endpoint) {
    // Action: Save subscription
    savedSubscription = body;
    return NextResponse.json({ message: 'Subscribed!' });
  } else {
    // Action: Send notification
    if (!savedSubscription) {
      return NextResponse.json({ error: 'No subscription saved' }, { status: 400 });
    }

    await webpush.sendNotification(
      savedSubscription,
      JSON.stringify({ title: 'Next.js Push', body: 'This is a test notification!' })
    );
    return NextResponse.json({ message: 'Notification sent!' });
  }
}