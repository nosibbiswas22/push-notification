'use client';

import { useEffect, useState } from 'react';

export default function PushPage() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  const subscribe = async () => {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    });

    await fetch('/api/push', {
      method: 'POST',
      body: JSON.stringify(sub),
    });
    setIsSubscribed(true);
    alert('Subscribed successfully!');
  };

  const sendTest = async () => {
    await fetch('/api/push', { method: 'POST', body: JSON.stringify({}) });
  };

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Push Notification Demo</h1>
      {!isSubscribed ? (
        <button onClick={subscribe}>1. Enable Notifications</button>
      ) : (
        <button onClick={sendTest}>2. Send Test Notification</button>
      )}
    </div>
  );
}