
var arr=["“Be yourself; everyone else is already taken.”","-- Oscar Wilde",
         "“So many books, so little time.”","-- Frank Zappa",
         "“A room without books is like a body without a soul.”","-- Marcus Tullius Cicero",
         "“Be the change that you wish to see in the world.”","-- Mahatma Gandhi",
         "“If you tell the truth, you don't have to remember anything.”","-- Mark Twain",
         "“Always forgive your enemies; nothing annoys them so much.”","-- Oscar Wilde",
         "“Good friends, good books, and a sleepy conscience: this is the ideal life.”","-- Mark Twain",
         "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”","-- John Green",
         "The fool doth think he is wise, but the wise man knows himself to be a fool.","-- William Shakespeare",
         "“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”","-- Mark Twain",
];
var newe;
var old;
const quote =document.getElementById('quote');
const writer =document.getElementById('writer');
function randomQuote() {
    for(;newe==old || newe%2!=0;) {
        newe = Math.floor(Math.random() * 10);
    }
    old=newe;
    quote.innerHTML = arr[newe];
    writer.innerHTML = arr[newe+1];
    console.log(newe);
}


document.getElementById('button').addEventListener('click', randomQuote);




// Background js
var w = window.innerWidth,
    h = window.innerHeight,
    canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100,
    time,
    count,
    size = 7,
    speed = 20,
    parts = new Array,
    colors = ['red','#f57900','yellow','#ce5c00','#5c3566'];
var mouse = { x: 0, y: 0 };

canvas.setAttribute('width',w);
canvas.setAttribute('height',h);

function create() {
  time = 0;
  count = 0;

  for(var i = 0; i < arc; i++) {
    parts[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      toX: Math.random() * 5 - 1,
      toY: Math.random() * 2 - 1,
      c: colors[Math.floor(Math.random()*colors.length)],
      size: Math.random() * size
    }
  }
}

function particles() {
  ctx.clearRect(0,0,w,h);
   canvas.addEventListener('mousemove', MouseMove, false);
  for(var i = 0; i < arc; i++) {
    var li = parts[i];
    var distanceFactor = DistanceBetween( mouse, parts[i] );
    var distanceFactor = Math.max( Math.min( 15 - ( distanceFactor / 10 ), 10 ), 1 );
    ctx.beginPath();
    ctx.arc(li.x,li.y,li.size*distanceFactor,0,Math.PI*2,false);
    ctx.fillStyle = li.c;
    ctx.strokeStyle=li.c;
    if(i%2==0)
      ctx.stroke();
    else
      ctx.fill();
    
    li.x = li.x + li.toX * (time * 0.05);
    li.y = li.y + li.toY * (time * 0.05);
    
    if(li.x > w){
       li.x = 0; 
    }
    if(li.y > h) {
       li.y = 0; 
    }
    if(li.x < 0) {
       li.x = w; 
    }
    if(li.y < 0) {
       li.y = h; 
    }
   
     
  }
  if(time < speed) {
    time++;
  }
  setTimeout(particles,1000/rate);
}
function MouseMove(e) {
   mouse.x = e.layerX;
   mouse.y = e.layerY;

   //context.fillRect(e.layerX, e.layerY, 5, 5);
   //Draw( e.layerX, e.layerY );
}
function DistanceBetween(p1,p2) {
   var dx = p2.x-p1.x;
   var dy = p2.y-p1.y;
   return Math.sqrt(dx*dx + dy*dy);
}
create();
particles();