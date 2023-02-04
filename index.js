/**
Challenge: 

1. Fetch a random activity from the Bored API
url: https://www.boredapi.com/api/activity

2. Display the text of the activity in the browser
*/

fetch("https://www.boredapi.com/api/activity")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("activity-name").textContent = data.activity;
  });
