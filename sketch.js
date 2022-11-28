const cnv = document.querySelector("#cnv-1")
cnv.width = window.innerWidth
cnv.height = window.innerHeight
const ctx = cnv.getContext('2d')
optimizeCanvas(cnv)

console.log(cnv)
const r = 100
let a = 0

function draw() {
  //background(220);

  window.requestAnimationFrame(draw)

  ctx.clearRect(window.innerWidth/2-50, window.innerHeight/2-50, 100, 100)

      ctx.save()
      ctx.translate(window.innerWidth/2, window.innerHeight/2)
      ctx.fillStyle = 'violet'
      ctx.beginPath()
      const x = Math.sin(a) *r
      const y = Math.sin(a*100) * r
      a += 0.01
      ctx.arc(x*2, y*2, 1.5, 0, Math.PI * 2)
      ctx.fill()
      // ctx.restore()

      ctx.fillStyle = 'palegreen'
      ctx.beginPath()
      ctx.arc(x, y, 1, 0, Math.PI *2 )
      ctx.fill()
}

draw()

