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
var state = data;
// Select the button
var button = d3.select("#filter-btn1");

// Create event handlers 
// Define action when button is clicked
button.on("click", runState);

// Select the form
var form = d3.select("#form");
form.on("submit", runState);

function runState() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // clears table
  tbody.selectAll('*').remove();
  // Select the input element and get the raw HTML node
  var inputElementS = d3.select("#state");

  // Get the value property of the input element
  var inputValueS = inputElementS.property("value");

  console.log(inputValueS);
  // correct capitliztion erros inputs
  var inputValueLowState = inputValueS.toLowerCase();
  inputValueS = inputValueLowState
  console.log(inputValueLowState);

  
  var filteredState = state.filter(sta => sta.state === inputValueS);

  console.log(filteredState);

  // // Step 4: Use d3 to append 1 cell per weather report value (Date, City, State, Country, Shape, Duration, Comments)
  filteredState.forEach(function(et) {
    console.log(et);
    var row = tbody.append("tr");

      Object.entries(et).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value
        
        var cell = row.append("td");
        cell.text(value)
      })
  })
};


/// #######################################
/// #######################################
// ##########################################
// Goal C: filter data by City.
var city = data;
// Select the button
var button = d3.select("#filter-btn2");

// Create event handlers 
// Define action when button is clicked
button.on("click", runCity);

// Select the form
var form = d3.select("#form");
form.on("submit", runCity);

function runCity() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // clears table
  tbody.selectAll('*').remove();
  // Select the input element and get the raw HTML node
  var inputElementCity = d3.select("#city");

  // Get the value property of the input element
  var inputValueCity = inputElementCity.property("value");

  console.log(inputValueCity);
  //console.log(state);
  var inputValueLowCity = inputValueCity.toLowerCase();
  inputValueCity = inputValueLowCity
  
  var filteredCity = city.filter(ci => ci.city === inputValueCity);

  console.log(filteredCity);

  // // Step 4: Use d3 to append 1 cell per weather report value (Date, City, State, Country, Shape, Duration, Comments)
  filteredCity.forEach(function(et) {
    console.log(et);
    var row = tbody.append("tr");

      Object.entries(et).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value
        
        var cell = row.append("td");
        cell.text(value)
      })
  })
};

/// #######################################
/// #######################################
// ##########################################
// Goal D: filter data by Country.
var country = data;
// Select the button
var button = d3.select("#filter-btn3");

// Create event handlers 
// Define action when button is clicked
button.on("click", runCountry);

// Select the form
var form = d3.select("#form");
form.on("submit", runCountry);

function runCountry() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // clears table
  tbody.selectAll('*').remove();
  // Select the input element and get the raw HTML node
  var inputElementCO = d3.select("#country");

  // Get the value property of the input element
  var inputValueCO = inputElementCO.property("value");

  console.log(inputValueCO);

  var contrtCap = inputValueCO.toLowerCase();
  inputValueCO = contrtCap
  //console.log(state);

  
  var filteredCountry = country.filter(co => co.country === inputValueCO);

  console.log(filteredCountry);

  // // Step 4: Use d3 to append 1 cell per weather report value (Date, City, State, Country, Shape, Duration, Comments)
  filteredCountry.forEach(function(et) {
    console.log(et);
    var row = tbody.append("tr");

      Object.entries(et).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value
        
        var cell = row.append("td");
        cell.text(value)
      })
  })
};

/// #######################################
/// #######################################
// ##########################################
// Goal F: filter data by Shape.
var shape = data;
// Select the button
var button = d3.select("#filter-btn4");

// Create event handlers 
// Define action when button is clicked
button.on("click", runShape);

// Select the form
var form = d3.select("#form");
form.on("submit", runShape);

function runShape() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // clears table
  tbody.selectAll('*').remove();
  // Select the input element and get the raw HTML node
  var inputElementShape = d3.select("#shape");

  // Get the value property of the input element
  var inputValueShape = inputElementShape.property("value");

  console.log(inputValueShape);
  //console.log(state);
  var shapeCap = inputValueShape.toLowerCase();
  inputValueShape = shapeCap
  
  var filteredShape = shape.filter(sha => sha.shape === inputValueShape);

  console.log(filteredShape);

  // // Step 4: Use d3 to append 1 cell per weather report value (Date, City, State, Country, Shape, Duration, Comments)
  filteredShape.forEach(function(et) {
    console.log(et);
    var row = tbody.append("tr");

      Object.entries(et).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value
        
        var cell = row.append("td");
        cell.text(value)
      })
  })
};