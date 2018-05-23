//Assigning elements to variables
const serachForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

//---------Event Listener on Form Button---------
serachForm.addEventListener("submit", e => {
  e.preventDefault();
  //Get Search Term
  const searchTerm = searchInput.value;

  //If textbox is empty run showMessage function
  if (searchTerm === "") {
    //Passes in a message and a classname to showMessage
    showMessage("Please add a search term", "empty-alert");
  }
  //Clear input
  searchInput.value = "";
  //Run getSearch which passes in the searchTerm from the form
  getSearch(searchTerm);
});

//---------showMessage takes in a message and className from the form---------
function showMessage(message, className) {
  const div = document.createElement("div");
  div.className = `${className}`;
  div.appendChild(document.createTextNode(message));

  //We are going to add a warning if the textbox is empty
  const searchForm = document.getElementById("search-form");
  const search = document.getElementById("search-input");
  searchForm.insertBefore(div, search);

  //Warning disappears after 3 seconds
  setTimeout(() => document.querySelector(".empty-alert").remove(), 3000);
}

//---------Takes in serchTerm parameter for the form---------
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


