
// The make grid function which contains the meat of the code.
let makeGrid = function() {

  // Gets the height and width of the grid from the form.
  let gridHeight = $("#gridHeight").val();
  let gridWidth = $("#gridWidth").val();
  // Gets where the grid will be displayed from the document,
  let gridMain = $("#gridMain");

  $("#errorDiv").remove(); // Remove the error on submition.

  // Checks to make sure that the max is not exceeded.
  if ((gridHeight > 32) || (gridWidth > 32) ) {
    let errorDiv="<div id=\"errorDiv\">Error: Please keep the height and width under 32!</div>";
    $("#displayHeader").after(errorDiv);
  } else {
    let div="<div></div>";

    $(".gridRow").remove(); // Remove the grid on resubmition or it will add to current grid.

    // Create the grid by adding the right amout of rows then adding the proper amount of boxes.
    for (let i = 0; i < gridHeight; i++) {
      gridMain.append(div);
    };
    let gridRow = gridMain.children();
    gridRow.addClass("gridRow");

    for (let i = 0; i < gridWidth; i++) {
      $(".gridRow").append(div);
    };
    $(".gridRow").children().addClass("gridBox");
  }
};

$("#gridButton").click(makeGrid);  // Method to create the grid on clicking on the submit button.


// Creates a listener for the clicks within the area of the grid and changing the colour of the background to the color selected by the colour picker.
$("#gridMain").on('click', '.gridBox', function(){
  let gridColour = $("#gridColour").val();
  console.log(gridColour);
  $(this).css("background-color", gridColour);
});
