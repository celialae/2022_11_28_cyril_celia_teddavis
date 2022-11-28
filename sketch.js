const cnv = document.querySelector("#cnv-1")
cnv.width = window.innerWidth
cnv.height = window.innerHeight
const ctx = cnv.getContext('2d')
optimizeCanvas(cnv)



class drawForm {
  constructor (x, y, size, color) {
    this.x = x
    this.y = y
    this.s = size
    this.c = color
  }
  show() {
    ctx.strokeRect(this.x, this.y, this.size, this.size)
  }
}


console.log(cnv)
const r = 10
let aX = 0
let aY = 0
let a = 4
let size = 100
let color = "violet"
ctx.strokeStyle = color

let mouseX 
let mouseY

window.addEventListener("click", (e) =>{
    console.log("click")



    if (color == "violet") {
      color = "green"
      ctx.strokeStyle = color
    } else if (color == "green") {
      color= "violet"
      ctx.strokeStyle = color
    }


  // console.log(mouseX, mouseY)
})

window.addEventListener("mousemove", (e) =>{
  mouseX = e.clientX
  mouseY = e.clientY

  cvsShiftX = mapRange(mouseX, 0, cnv.offsetWidth, 0, 200)
  cvsShiftY = mapRange(mouseY, 0, cnv.offsetWidth, 0, 200)
  console.log(cvsShiftX, cvsShiftY)

  for (let i = 0; i < 5; i++) {
    ctx.save()
    ctx.scale(1, 1)
    ctx.drawImage(cnv, 0, 0, cvs.offsetWidth * 0.5, cvs.offsetHeight * 0.5 )
    ctx.restore()
  }
  

  // console.log(mouseX, mouseY)
})

let iShiftX = 0
let iShiftY = 0

function refresh() {
  // console.log("Mouseposition: ", mouseX, mouseY)
  if (mouseX && mouseY) {
    // console.log("Refresh")
    iShiftX = mapRange(mouseX, 0, cnv.offsetWidth, -10, 10)
    iShiftY = mapRange(mouseY, 0, cnv.offsetWidth, -10, 10)
    window.requestAnimationFrame(refresh)
  }
}

function draw() {

  //background(220);
      

  // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      refresh()
      // console.log("Shifts", iShiftX, iShiftY)
      ctx.save()
      ctx.translate(window.innerWidth/2, window.innerHeight/2)
      
      // ctx.beginPath()
      // const x = Math.sin(a) *r
      // const y = Math.sin(a*100) * r

      let x = aX * (iShiftX + 1 )
      let y = aY * (iShiftY+ 1 )

      if (x > window.innerWidth) {
        x = aX * iShiftX
      } else if (x < 0) {
        x = aX * iShiftX
      }

      if (y > window.innerHeight) {
        y = aY * (iShiftY + 1 )
      } else if (y < 0) {
        y = aY * iShiftY
      }


      
      aX += getRndInteger(-a, a)
      aY += getRndInteger(-a, a)
     
      ctx.lineWidth = 0.15
      ctx.save()
      ctx.translate(x, y)
      
      ctx.strokeRect(x, y, size, size)
      ctx.restore()

      ctx.lineWidth = 0.15
      ctx.save()
      ctx.rotate(Math.PI)
      ctx.translate(x, y)
      ctx.strokeRect(x, y, size, size)
      ctx.restore()

      ctx.restore()

     
      
      window.requestAnimationFrame(draw)
}

refresh()
draw()

