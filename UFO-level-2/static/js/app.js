//      Not sure If this is needed
// from data.js
// var tablesData can be hashed out and it works. Why?????
 //var tableData = data;
var data = data
// YOUR CODE HERE!

// ##########################################
// ##########################################
// Goal A: publish the data to the web page.

// Get a reference to the table body from HTML
// tbody is the main data table
var tbody = d3.select("tbody");


// // Step 4: Use d3 to append 1 cell per weather report value (Date, City, State, Country, Shape, Duration, Comments)
data.forEach(function(et) {
   console.log(et);
   var row = tbody.append("tr");

   Object.entries(et).forEach(function([key, value]) {
    console.log(key, value);
      //Append a cell to the row for each value
      //in the weather report object
     var cell = row.append("td");
     cell.text(value);
   });
});

// ##########################################
// Goal B: filter data by date.

 // Set up Date fileter 
// Assign the data from `data.js` to a descriptive variable

var date = data;

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
// Define action when button is clicked
button.on("click", runEnter);

// Select the form
var form = d3.select("#form");
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // clears table
  tbody.selectAll('*').remove();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(date);

  var filteredData = date.filter(day => day.datetime === inputValue);
  //var filteredData = state.filter(sta => sta.state === inputValue);

  console.log(filteredData);

  // // Step 4: Use d3 to append 1 cell per weather report value (Date, City, State, Country, Shape, Duration, Comments)
  filteredData.forEach(function(et) {
    console.log(et);
    var row = tbody.append("tr");

      Object.entries(et).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value
        //in the weather report object
        var cell = row.append("td");
        cell.text(value)
      })
  })
};
/// #######################################
/// #######################################
// ##########################################
// Goal C: filter data by state.

// Select the button
var button = d3.select("#filter-btn");

// Create event handlers 
// Define action when button is clicked
button.on("click", runEnter);

// Select the form
var form = d3.select("#form");
form.on("submit",runEnter);

function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // clears table
  tbody.selectAll('*').remove();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#state");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(date);

  var filteredData = date.filter(day => day.datetime === inputValue);
  //var filteredData = state.filter(sta => sta.state === inputValue);

  console.log(filteredData);

  // // Step 4: Use d3 to append 1 cell per weather report value (Date, City, State, Country, Shape, Duration, Comments)
  filteredData.forEach(function(et) {
    console.log(et);
    var row = tbody.append("tr");

      Object.entries(et).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value
        //in the weather report object
        var cell = row.append("td");
        cell.text(value)
      })
  })
};
