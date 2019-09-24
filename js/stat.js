var CLOUD_COLOR = "#fff";
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var SHADOW_GAP = 10;
var FONT_SIZE = 16;
var BAR_HEIGHT = 150;
var COLUMN_WIDTH = 40; 
var COLUMN_GAP = 50;
var MY_COLOR = 'rgba(255, 0, 0, 1)';
var otherColor = 'hsl(245 ,'+ Math.random() + ', 1)';

//Время прохождения игры должно быть округлено к целому числу

var renderCloud = function(ctx, x, y, color){
ctx.fillStyle = color;
ctx.fillRect = (x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

}

var getMaxElement = function(arr) {
  var maxElement = arr[0];  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }  
  return maxElement;
};

window.renderStatistics = function(ctx, names, times ) {
renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP,  SHADOW_COLOR); //тень
renderCloud(ctx, CLOUD_X, CLOUD_Y,  CLOUD_COLOR); //облако	


ctx.font = "16px PT Mono";
ctx.fillText("Ура вы победили!", CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP);
ctx.fillText("Список результатов:", CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP + FONT_SIZE);
//ctx.fillStyle = "#000"; ?
var maxTime = getMaxElement(times);

for (var i = 0; i < names.length; i++){	
var columnHeight = times[i] * BAR_HEIGHT / maxTime; 
ctx.fillText(Math.round(times[i]),CLOUD_X + SHADOW_GAP +(COLUMN_WIDTH + COLUMN_GAP)*i, CLOUD_Y + SHADOW_GAP + FONT_SIZE * 2);
names[i] === "Вы" ? ctx.fillStyle = MY_COLOR: ctx.fillStyle = otherColor;
ctx.fillRect = (CLOUD_X + SHADOW_GAP +(COLUMN_WIDTH + COLUMN_GAP)*i , CLOUD_Y + SHADOW_GAP + FONT_SIZE * 3 + (BAR_HEIGHT - columnHeight), CLOUD_WIDTH, columnHeight);	
ctx.fillText(names[i],CLOUD_X + SHADOW_GAP +(COLUMN_WIDTH + COLUMN_GAP)*i,CLOUD_Y + SHADOW_GAP + FONT_SIZE * 3 + BAR_HEIGHT  );	
}	
};