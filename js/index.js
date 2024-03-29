console.clear();

var img = document.getElementById('input');

var c = document.getElementById('output'),
    ctx = c.getContext('2d');

c.width = img.width;
c.height = img.height;

var tic, sine, sineNormalized,
    start = Date.now();
    
var params = {
  AMP: 80,
  FREQ: 0.01,
  SPEED: 5,
  VERTICAL: false
};

function update() {
  tic = (Date.now() - start) * 0.001;
}

function render() {
  ctx.clearRect(0, 0, c.width, c.height);
  for(var i = 0; i < img.height; i++) {
    if(params.VERTICAL) {
      var ofs = params.AMP * (0.5 + (Math.sin(tic * params.SPEED + (i * params.FREQ)) * 0.5));
      ctx.drawImage(img,
                  0, i, img.width, 1,
                  0, i - (ofs * 0.5), img.width, 1 + ofs);
    } else {
      var ofs = params.AMP * Math.sin(tic * params.SPEED + (i * params.FREQ));
      ctx.drawImage(img,
                  0, i, img.width, 1,
                  0 + ofs, i, img.width, 1);
    }
    
  }
}
var requestId;
function loop() {
  requestId = window.requestAnimationFrame(loop);
  update();
  render();
}
function start() {
    if (!requestId) {
       loop();
    }
}
function stop() {
    if (requestId) {
       window.cancelAnimationFrame(requestId);
       requestId = undefined;
    }
    $("canvas").hide();
    $("#input").toggleClass('back');

}

loop();
setTimeout(stop,10000);