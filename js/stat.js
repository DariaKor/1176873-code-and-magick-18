var CLOUD_COLOR = 'rgba(256, 256, 256, 1.0)';
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var SHADOW_COLOR = '#9696a2';
var SHADOW_GAP = 10;
var FONT_SIZE = 16;
var BAR_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_GAP = 50;
var BLUE_COLOR = 242;
var MY_COLOR = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = '#000';
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", CLOUD_X + SHADOW_GAP * 5, CLOUD_Y + SHADOW_GAP * 3);
  ctx.fillText("Список результатов:", CLOUD_X + SHADOW_GAP * 5, CLOUD_Y + SHADOW_GAP * 3 + FONT_SIZE);

  for (var i = 0; i < names.length; i++) {
    var maxTime = getMaxElement(times);
    var columnHeight = times[i] * BAR_HEIGHT / maxTime;
    var saturation = Math.floor(Math.random() * 85) + 15;
    var objectPositionX = CLOUD_X + SHADOW_GAP * 5 + (COLUMN_WIDTH + COLUMN_GAP) * i;
    var textTimePositionY = CLOUD_Y + SHADOW_GAP * 4 + FONT_SIZE * 2;
    var textNamePositionY = CLOUD_Y + SHADOW_GAP * 6 + FONT_SIZE * 3 + BAR_HEIGHT;
    var columnPositionY = CLOUD_Y + SHADOW_GAP * 3 + FONT_SIZE * 3 + (BAR_HEIGHT - columnHeight);

    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), objectPositionX, textTimePositionY);
    ctx.fillStyle = (names[i] === "Вы")
      ? ctx.fillStyle = MY_COLOR
      : 'hsl(' + BLUE_COLOR + ' ,' + saturation + '%, 50%)';

    ctx.fillRect(objectPositionX, columnPositionY, COLUMN_WIDTH, columnHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], objectPositionX, textNamePositionY);
  }
};

