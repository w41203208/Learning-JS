const registration = navigator.serviceWorker
  .register('sw.js', { scope: '/' })
  .then((res) => {})
  .catch((err) => console.log(err));

navigator.serviceWorker.oncontrollerchange = () => {
  console.log('controller change');
};

async function makeRequest() {
  const result = await fetch('https://localhost:44454/api/User', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'content-type': 'application/json',
    },
  });
  const payload = await result.json();
  console.log(payload);
}
