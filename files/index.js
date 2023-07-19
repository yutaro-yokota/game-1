let canvas, g;

onload = function() {
  // 描画コンテキストの取得
  canvas = this.document.getElementById("gamecanvas");
  g = canvas.getContext("2d");
  console.log("表示された");
  // 初期化
  init();
  //　ゲームループの設定: 60fps
  setInterval("gameloop()", 16);
}

function init() {}

function keydown(e) {}

function gameloop() {
  update();
  draw();
}

function update() {}

function draw() {}