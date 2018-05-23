How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
  
  `I spent 3 hours on this coding test.  I used the default limit of 25 restuarants displayed, but if I had more time I would add arrows to allow the user to scan through all the restaurants.` 

What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
```
  function getSearch(searchTerm) {
  //using fetch to call opentable
  return fetch(`http://opentable.herokuapp.com/api/restaurants?city=${searchTerm}`)
    .then(res => res.json()) //takes in results and converting to .json
    .then(data => {
      const results = data.restaurants.map(data => data);
      let output = '<div class = "cards">';//creating div for output
      //If there are results we loop thru each one and display out a card
      results.forEach(result => {
        output += `
          <div class="card-container">
            <img class="card-img-top" src="${result.image_url}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">Name: ${result.name}</h5>
              <h5 class="card-title">Address: ${result.address}</h5>
              <h5 class="card-title">Price rating: ${result.price} /4</h5>
            </div>
        </div>
      `;
      });
      output += '</div>';
      document.getElementById('results').innerHTML = output;
    });
  }
```
  `I love using the fetch api!!!  Compared to using ajax it is much simpler.  As you can see from my code I've used vanilla JS instead of jQuery.  With the addition of Fetch and vanilla JS selectors there is less of a need to use jQuery.`

How would you track down a performance issue in production? Have you ever had to do this?
  
  `I'll be honest I really do not know how to track performance issues, but I am a quick learner and willing to learn!!!`

How would you improve the API that you just used?
  
  `I would update the restaurants and a lot of the links such as the reservations links are not up to date.`  

Please describe yourself using JSON.
  
  `I enjoy using JSON.  It is great way to store data, access data and easy to understand.`