document.addEventListener('DOMContentLoaded', () => {
    const jokeDiv = document.getElementById('joke');
    const button = document.getElementById('getJoke');
  
    button.addEventListener('click', () => {
      fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
          jokeDiv.innerHTML = `<strong>${data.setup}</strong><br>${data.punchline}`;
        })
        .catch(error => {
          jokeDiv.innerHTML = 'Failed to fetch a joke. Try again later!';
          console.error('Error fetching joke:', error);
        });
    });
  });
  