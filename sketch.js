const cnv = document.querySelector("#cnv-1")
cnv.width = window.innerWidth
cnv.height = window.innerHeight
const ctx = cnv.getContext('2d')
optimizeCanvas(cnv)


console.log(cnv)
const r = 10
let a = 0

let mouseX = 0
let mouseY = 0

window.addEventListener("mousemove", (e) =>{
  mouseX = e.clientX
  mouseY = e.clientY
  // console.log(mouseX, mouseY)
})

let iShiftX = 0
let iShiftY = 0

function refresh() {
  // console.log("Mouseposition: ", mouseX, mouseY)
  if (mouseX && mouseY) {
    console.log("Refresh")
    iShiftX = mapRange(mouseX, 0, cnv.offsetWidth, -10, 10)
    iShiftY = mapRange(mouseY, 0, cnv.offsetWidth, -10, 10)
    window.requestAnimationFrame(refresh)
  }
}



function draw() {
  //background(220);


  // ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      refresh()
      console.log("Shifts", iShiftX, iShiftY)
      ctx.save()
      ctx.translate(window.innerWidth/2, window.innerHeight/2)
      ctx.fillStyle = 'violet'
      // ctx.beginPath()
      // const x = Math.sin(a) *r
      // const y = Math.sin(a*100) * r
      let x = r + a + iShiftX
      let y = r + a + iShiftY
      a += 0.1
      // console.log("interval ", a)
      // console.log("coord", x,y)

      ctx.fillRect(x, y, 50, 50)
      // ctx.arc(x, y, 1.5, 0, Math.PI)
      // ctx.fill()
      ctx.restore()
      
      window.requestAnimationFrame(draw)
}

refresh()
draw()

