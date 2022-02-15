canvas=document.getElementById("Olympic_Canvas")
ctx=canvas.getContext("2d")

ctx.beginPath()
ctx.lineWidth=5
ctx.strokeStyle="gray"
ctx.rect(150,143,430,200)
ctx.stroke()

ctx.beginPath()
ctx.lineWidth=5
ctx.strokeStyle="blue"
ctx.arc(270,200,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.lineWidth=5
ctx.strokeStyle="black"
ctx.arc(375,200,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.lineWidth=5
ctx.strokeStyle="red"
ctx.arc(480,200,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.lineWidth=5
ctx.strokeStyle="yellow"
ctx.arc(322,240,40,0,2*Math.PI)
ctx.stroke()

ctx.beginPath()
ctx.lineWidth=5
ctx.strokeStyle="green"
ctx.arc(428,240,40,0,2*Math.PI)
ctx.stroke()