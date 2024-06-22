async function fetchGreeting() {
  const response = await fetch('http://localhost:9002/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: 'query { greeting }',
    })
  });
  const { data } = await response.json();
  // console.log('body:', body);
  return data.greeting;
}

fetchGreeting().then((greeting) => {
  document.getElementById('greeting').textContent = greeting;
});