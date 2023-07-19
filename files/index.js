let canvas, g;
let charaX, charaY, charaImage
onload = function() {
  // 描画コンテキストの取得
  canvas = this.document.getElementById("gamecanvas");
  g = canvas.getContext("2d");
  // 初期化
  init();
  // 入力処理の指定
  document.onkeydown = keydown;
  //　ゲームループの設定: 60fps
  setInterval("gameloop()", 16);
}

function init() {
  charaX = 100;
  charaY = 400;
  charaImage = new Image();
  charaImage.onload = function() {
    // 画像がロードされた後にdraw()を呼び出す
    draw();
  };
  charaImage.src = "images/test.png";
}

function keydown(e) {}

function gameloop() {
  update();
  draw();
}

function update() {
  charaX = charaX + 2;
}

function draw() {
  // 背景
  g.fillStyle = "rgb(0,0,0)";
  g.fillRect(0,0,480,480);

  // キャラ描画
  g.drawImage (
    charaImage,
    //座標を画像の中心にする
    charaX - charaImage.width / 2,
    charaY - charaImage.height / 2

  );
}