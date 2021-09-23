var song;
var fft;
var r;
var g;
var b;
var a;
  
function preload() {
  song = loadSound("examplesong.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  fft = new p5.FFT();

}

function draw() {
  background(0)
  r = random(100, 255)
  g = random(100, 255)
  b = random(100, 255)
  a = random(100, 255)
  stroke(r, g, b, a)
  fill(0)

  translate(width / 2, height / 2)

  var wave = fft.waveform()


  for (var t = -1; t <= 1; t+= 2) {
    beginShape()
    for (var i = 0; i <= 180; i += 0.1) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1))

      var r = map(wave[index], -1, 1, 150, 360)
      var x = r * sin(i) * t
      var y = r * cos(i)
      vertex(x, y)
    }
    endShape()
  }
  
  frameRate(30)
}
 
function mouseClicked() {
  if (song.isPlaying()) {
    song.pause()
    noLoop()
  } else {
    song.play()
    loop()
  }
}