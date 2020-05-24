// from data.js
var tableData = data;
console.log(tableData)

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each ufo data object
data.forEach(function(ufoData) {
    console.log(ufoData);
  });
 
 // // Step 2:  Use d3 to append one table row `tr` for each ufo data object
 
  data.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");
  });

 // // Step 3:  Use `Object.entries` to console.log each weather report value
 data.forEach(function(ufoData) {
    console.log(ufoData);
    var row = tbody.append("tr");
 
    Object.entries(ufoData).forEach(function([key, value]) {
      console.log(key, value);
    });
  });
 
 // // Step 4: Use d3 to update each cell's text with data values

 data.forEach((ufoData) => {
    var row = tbody.append("tr");
    row.append("td").text(ufoData.datetime);
    row.append("td").text(ufoData.city);
    row.append("td").text(ufoData.state);
    row.append("td").text(ufoData.country);
    row.append("td").text(ufoData.shape);
    row.append("td").text(ufoData.durationMinutes);
    row.append("td").text(ufoData.comments);
  });
  
