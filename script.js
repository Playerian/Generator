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
    for (var bb=0;bb < 1;bb++) {
        map[aa][bb] = "Nothing";
    }
}
//Box Creating Function
function Create(){
    for (var c=0;c < InputA;c++) {
        for (var d=0;d < InputB;d++) {
            if (map[c][d] === "Wall"){
                $("#map").append("<div "+"class='map'"+"style='left:"+c*20+"px;top:"+(d*20+100)+"px'"+" ></div>");
            }
        }
    }
    
}
//Click To create
$("#B").click(function(){
    //Clear Map
    $("#map").html("");
    //Clear Array
    for (var aaa=0;aaa < 100;aaa++) {
        for (var bbb=0;bb < 1;bbb++) {
            map[aaa][bbb] = "Nothing";
        }
    }
    //Check for Inputs
    InputA = $("#i1").val();
    InputB = $("#i2").val();
    //Randoming block attribute
    for (var a=0;a < InputA;a++) {
        for (var b=0;b < InputB;b++) {
            map[a][b] = "Wall";
        }
    }
    //Call Function to create visual boxes
    Create();
});




