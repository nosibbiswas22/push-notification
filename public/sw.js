self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : { title: 'Success', body: 'It works!' };
  
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon.png',
    })
  );
});