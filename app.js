// from data.js
var ufodata = data;

var tbody = d3.select("tbody");

data.forEach((ufodata) => {
    var row = tbody.append("tr");
    Object.entries(ufodata).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



  // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the date time input element
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = ufodata.filter(ufodata => ufodata.datetime === inputValue);

  console.log(filteredData);

  var outputList = d3.select("tbody"); 

//   remove existing content
  outputList.selectAll("td").remove();

  data.forEach((filteredData) => {
        var row = outputList.append("tr");

        Object.entries(filteredData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
   });

//    console.log(outputList);

});