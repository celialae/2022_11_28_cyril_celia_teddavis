const cnv = document.querySelector("#cnv-1")
cnv.width = window.innerWidth
cnv.height = window.innerHeight
const ctx = cnv.getContext('2d')
optimizeCanvas(cnv)

console.log(cnv)
const r = 10
let a = 0


function draw() {
  //background(220);


  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)


      ctx.save()
      ctx.translate(window.innerWidth/2, window.innerHeight/2)
      ctx.fillStyle = 'violet'
      // ctx.beginPath()
      // const x = Math.sin(a) *r
      // const y = Math.sin(a*100) * r
      let x = r + a
      let y = r + a
      a += 0.1
      console.log("interval ", a)
      console.log("coord", x,y)

      ctx.fillRect(x, y, 50, 50)
      // ctx.arc(x, y, 1.5, 0, Math.PI)
      // ctx.fill()
      ctx.restore()

      window.requestAnimationFrame(draw)
}

draw()

