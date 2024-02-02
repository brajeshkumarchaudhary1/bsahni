/* @type HTMLCanvasElement */
alert("Hi i hope you like my code :) please upvote")
alert("Theres also a hidden easter egg, good luck finding that.")
const canvas =document.getElementById("canvas")
const ctx =canvas.getContext("2d")
canvas.width =window.innerWidth;
canvas.height =window.innerHeight;
let color ="lime"
const p =document.getElementById("p")
p.addEventListener('click', function(){
  color ="red"
})
//measure title element

let titleElement =document.getElementById("title")
let titleMeasurements =titleElement.getBoundingClientRect();
const title = {
  x: titleMeasurements.left,
  y: titleMeasurements.top,
  width: titleMeasurements.width,
  height: 50,
}

let particleArray =[];
const numberOfParticles =200;

class Particle {
  constructor(x, y){
    this.x =x;
    this.y =y;
    this.size = Math.random()*11 + 1;
    this.weight = Math.random()*2+1;
    this.directionX =-2;
  }
  update(){
    if (this.y > canvas.height) {
    this.y = 0 -this.size
    this.weight = Math.random()*2+1;
    this.x =Math.random()*canvas.width * 1.3
   }
    this.weight +=0.05;
    this.y += this.weight;
    this.x +=this.directionX
    //check for collision
    if (
      this.x < title.x +title.width &&
      this.x + this.size > title.x &
      this.y < title.y +title.height &&
      this.y + this.size > title.y
      ) {
        this.y -=3
        this.weight *= -0.5
      }
  }
  draw(){
   ctx.fillStyle =color
   ctx.beginPath()
   ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
   ctx.closePath()
   ctx.fill()
  }
}
function init(){
  for (i =0; i <numberOfParticles; i++) {
    const x =Math.random()* canvas.width;
    const y =Math.random()*canvas.height;
    particleArray.push(new Particle(x, y))
  }
  console.log(particleArray)
}
init()
function animate(){
  ctx.fillStyle ='rgba(0, 0, 0, 0.07)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for (i =0; i <particleArray.length; i++){
    particleArray[i].update()
    particleArray[i].draw()
  }
  
  requestAnimationFrame(animate)
}
animate()

window.addEventListener('resize', function(){
  canvas.width =window.innerWidth;
  canvas.height =window.innerHeight;
  titleMeasurements =titleElement.getBoundingClientRect()
  init()
})