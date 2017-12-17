let makeGrid = function() {
  let gridHeight, gridthWidth, gridMain, gridRow, gridBox;

  gridHeight = $("#gridHeight").val();
  gridWidth = $("#gridWidth").val();
  gridMain = $("#gridMain");

  $("#errorDiv").remove();
  if ((gridHeight > 32) || (gridWidth > 32) ) {
    errorDiv="<div id=\"errorDiv\">Error: Please keep the height and width under 32!</div>";
    $("#displayHeader").after(errorDiv);
  } else {
    div="<div></div>";

    $(".gridRow").remove();

    for (let i = 0; i < gridHeight; i++) {
      gridMain.append(div);
    };
    gridRow = gridMain.children();
    gridRow.addClass("gridRow");

    for (let i = 0; i < gridWidth; i++) {
      $(".gridRow").append(div);
    };
    $(".gridRow").children().addClass("gridBox");
  }
};

$("#gridButton").click(makeGrid);

$("#gridMain").on('click', '.gridBox', function(){
  let gridColour = $("#gridColour").val();
  console.log(gridColour);
  $(this).css("background-color", gridColour);
});
