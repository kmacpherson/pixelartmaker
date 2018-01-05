
//Refactor from previous course using jQuery to standard Javascript.

// The make grid function which contains the meat of the code.
let makeGrid = function() {

  // Gets the height and width of the grid from the form.
  const gridHeight = document.querySelector('#gridHeight').value;
  const gridWidth = document.querySelector('#gridWidth').value;
  // Gets where the grid will be displayed from the document,
  const gridMain = document.querySelector('#gridMain');

  // Remove the error on submition.
  const errorDisp = document.querySelector("#errorDiv");

  let gribRow, gridBox;

  if (errorDisp !== null) {
    errorDisp.remove();
  }

  // Checks to make sure that the max is not exceeded.
  if ((gridHeight > 32) || (gridWidth > 32) ) {
    const errorDiv= document.createElement('div');
    errorDiv.textContent = "Error: Please keep the height and width under 32!";
    errorDiv.classList.add("errorDiv");
    const displayHead = document.querySelector("#displayHeader");
    displayHead.appendChild(errorDiv);
  } else {

    // Remove the grid on resubmition or it will add to current grid.
    const gridX = document.querySelector(".gridRow");

    if (gridX !== null) {
        gridX.remove();
    }

    // Create the grid by adding the right amout of rows then adding the proper amount of boxes.
    for (let i = 0; i < gridHeight; i++) {
      const div = document.createElement("div");
      gridMain.appendChild(div);
    };
    if (gridMain.hasChildNodes()) {
        gridRow = gridMain.childNodes;
    }
    for (let i = 0; i < gridRow.length; i++) {
      gridRow[i].classList.add("gridRow");
      for (let j = 0; j < gridWidth; j++) {
        const div = document.createElement("div");
        gridRow[i].appendChild(div);
      };
      if (gridRow[i].hasChildNodes()) {
        gridBox = gridRow[i].childNodes;
      };
      for (let i = 0; i < gridBox.length; i++) {
        gridBox[i].classList.add("gridBox");
      };
    };

    const gridCell = document.querySelectorAll(".gridBox");
    // Creates a listener for the clicks within the area of the grid and changing the colour of the background to the color selected by the colour picker.
    for (let i = 0; i < gridCell.length; i++) {
      gridCell[i].addEventListener('click', function(evt) {
      const gridColour = document.querySelector('#gridColour').value;
      evt.target.style.backgroundColor = gridColour;
      });
    };
  };
};

//Gets the button and stores it for later.
const gridButton = document.querySelector("#gridButton");

gridButton.addEventListener('click', makeGrid);  // Method to create the grid on clicking on the submit button.
