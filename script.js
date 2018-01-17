//Variable that gets from input boxes
var InputA = 10;
var InputB = 10;
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
    //Check Horizontal Inputs
    InputA = $("#i1").val();
    InputB = $("#i2").val();
    //Randoming block attribute
    for (var a=0;a<100;a++) {
        for (var b=0;b<100;b++) {
            map[a][b] = "Wall";
        }
    }
    //Call Function
    Create();
});


