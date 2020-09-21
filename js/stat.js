'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;

const FONT_GAP = 20;
const GAP = 10;

const BAR_WIDTH = 40;
const BAR_MAX_HEIGHT = 150;
const BAR_MARGIN_TOP = 100;
const BAR_MARGIN = 50;


const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
const renderText = function (ctx, color, text, x, y) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};
const renderHistogram = function (ctx, color, x, y, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};
const getMaxElement = function (arr) {
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#ffffff`);

  ctx.fillStyle = `#000000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + FONT_GAP, CLOUD_Y + GAP * 2);
  ctx.fillText(`Список результатов:`, CLOUD_X + FONT_GAP, CLOUD_Y + GAP * 2 + FONT_GAP);

  const players = [`Иван`, `Вы`, `Юлия`, `Кекс`];
  const times = [1543.4345, 811.543, 456.3333, 2234.111];

  for (let i = 0; i < players.length; i++) {
    const barHeight = (BAR_MAX_HEIGHT * times[i]) / getMaxElement(times);
    renderText(ctx, `#000000`, parseInt(times[i], 10), CLOUD_X + FONT_GAP * 2 + (BAR_MARGIN + BAR_WIDTH) * i, CLOUD_Y + (BAR_MARGIN_TOP + BAR_MAX_HEIGHT) - barHeight - FONT_GAP - FONT_GAP);
    renderHistogram(ctx, players[i] === `Вы` ? `rgba(255, 0, 0, 1)` : `hsl(233, 89%, ` + Math.floor(Math.random() * 100) + `%)`, CLOUD_X + FONT_GAP * 2 + (BAR_MARGIN + BAR_WIDTH) * i, CLOUD_Y + (BAR_MARGIN_TOP + BAR_MAX_HEIGHT) - barHeight - FONT_GAP, BAR_WIDTH, barHeight);
    renderText(ctx, `#000000`, players[i], CLOUD_X + FONT_GAP * 2 + (BAR_MARGIN + BAR_WIDTH) * i, CLOUD_Y + BAR_MARGIN_TOP + BAR_MAX_HEIGHT);
  }
};
