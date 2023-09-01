document.getElementById("showall").addEventListener("click", function () {
  allEmployees();
});

function allEmployees() {
  var http = new XMLHttpRequest();
  var url =
    "https://dev-rjh99678rinivw5.api.raw-labs.com/json-programming-heroes";
  http.open("GET", url, true);
  http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      const allData = JSON.parse(this.responseText);
      let dataStore = ""; // Create a variable to store the HTML content 

      // Loop through each hero object in the data
      for (const single of allData) {
        // Generate the HTML for each hero and append it to dataStore
        dataStore += `
            <div class="col-3">
              <div class="card text-white  mb-4">
                <div class="card-body">
                  <p><strong> Hero Name : </strong> ${single.hero_name}</p>
                  <p><strong>Hero Superpower:</strong> ${single.hero_superpower}</p>
                  
                  <p><strong>Hero Uniform color:</strong> ${single.hero_uniform_color}</p>
                </div>
              </div>
            </div>
          `;
      }

      // Display the generated HTML content in the alllist element
      document.getElementById("alllist").innerHTML = dataStore;
    }
  };
  http.send();
}
