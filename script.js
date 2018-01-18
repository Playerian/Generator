//Variable that gets from input boxes
var InputA;
var InputB;
//2d array function copied from web
function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}
//Array Creating
var map = Create2DArray(100);
//Set nothing to all tiles
for (var aa=0;aa < 100;aa++) {
    for (var bb=0;bb < 100;bb++) {
        map[aa][bb] = "Nothing";
    }
}
//Box Creating Function
function Create(){
    for (var c=0;c < InputA;c++) {
        for (var d=0;d < InputB;d++) {
            //Create tiles
            //Wall Create
            if (map[c][d] === "Wall"){
                $("<div "+"class='map'"+"style='left:"+c*20+"px;top:"+(d*20+100)+"px;'"+" ></div>").appendTo('#map').css({background:'gray'});
            }
            //Spawn Point Create
            if (map[c][d] === "Spawn"){
                $("<div "+"class='map'"+"style='left:"+c*20+"px;top:"+(d*20+100)+"px;'"+" ></div>").appendTo('#map').css({background:'yellow'});
            }
            //End Point Create
            if (map[c][d] === "End"){
                $("<div "+"class='map'"+"style='left:"+c*20+"px;top:"+(d*20+100)+"px;'"+" ></div>").appendTo('#map').css({background:'red'});
            }
        }
    }
}
//Click To create
$("#B").click(function(){
    //Clear Map
    $("#map").html("");
    //Check for Inputs
    InputA = $("#i1").val();
    InputB = $("#i2").val();
    //Randoming block attribute
    for (var a=0;a < InputA;a++) {
        for (var b=0;b < InputB;b++) {
            //Clear the value before adding value
            map[a][b] = "Nothing";
            //Starting point
            if (a === 0 && b === 0){
                map[a][b] = "Spawn";
            }
            //End Point
            if (a === InputA - 1 && b === InputB - 1){
                map[a][b] = "End";
            }
            //Wall Creation
            if (map[a][b] === "Nothing"){
                map[a][b] = "Wall";
            }
        }
    }
    //Call Function to create visual boxes
    Create();
});




