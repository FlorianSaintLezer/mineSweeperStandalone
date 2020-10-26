// MINESWEEPER STANDALONE jQUERY

$(function mineSweeper(){
  $('#msGrid').remove()
  //   CODE : MINESWEEPER
  var k = [77, 73, 78, 69, 83, 87, 69, 69, 80, 69, 82],
  n = 0;
  $(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
      if (n === k.length) {
        alert('MINE SWEEPER !!!');
  


  // VARIABLES
  var msBody = $('body');
  var msTotalRow = 10;
  var msTotalCol = 10;
  var msTotalSquares = msTotalRow * msTotalCol;
  var msTotalBomb = Math.round(msTotalSquares / 10);
  var msFlag = 0; 
  var msCount = 1;
  
  // GAME DESIGN
  $('head').append('<style ID="msMineSweeperStyle" type="text/css">'+
  '#msGrid{display:flex;width:200px;flex-wrap:wrap;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}'+
  '.msSquare{box-sizing:border-box;width:20px;height:20px;background-color:lightgray;border-left:white 2px solid;border-top:white 2px solid;border-right:gray 2px solid;border-bottom:gray 2px solid}'+
  '.msSquare:active{background-color: lightgray;border-left: gray 2px solid;border-top:gray 2px solid;border-right:white 2px solid;border-bottom: white 2px solid;}'+
  '.msBomb{background-color:red}'+
  '</style>');

  var msMineSweeperStyle = $('#msMineSweeperStyle');
  
  
  // GRID GENERATION
  msBody.prepend('<div id="msGrid"></div>');
  var msGrid = $('#msGrid'); //grid variable
  
  // SQUARES GENERATION
  for(var msRow = 1; msRow < msTotalRow + 1; msRow++) { //boucle de génération des cases par lignes...
    for(var msCol = 1; msCol < msTotalCol + 1; msCol++) { // et par colonnes.
      msGrid.append('<div class="msSquare msSquare-'+msCount+'" id="r'+msRow+'c'+msCol+'"></div>'); //div des cases avec nommage
      msCount++;
      
    }
  }
  var msSquare = $('.msSquare');

  // ATTRIBUTION DES BOMBES ( CLASS msBomb)
  for(var bomb=0; bomb < msTotalBomb; bomb++) {
    var msBombSquare = Math.floor(Math.random() * msTotalSquares) + 1;
    console.log('Bombe à la case '+msBombSquare);
    $('.msSquare-'+msBombSquare).addClass('msBomb');
  }
















        // RETURN OF MINESWEEPER CODE
        n = 0;
        return false;
      }
    } else {
        n = 0;
      }
  });

//MINESWEEPER FUNCTION END
});



     
        
