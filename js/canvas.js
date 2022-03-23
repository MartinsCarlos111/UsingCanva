var canva = document.getElementById('areaCanv'),
  ctx = canva.getContext('2d')
//Função nova
var img = new Image()

img.onload = function () {
  ctx.drawImage(img, 300, 90, 100, 50)
  ctx.drawImage(img, 600, 90, 200, 100)
  ctx.drawImage(img, 960, 90, 150, 100)
}
img.src = 'img/nuvem.png'
ctx.imageSmoothingEnabled = true

//tamanho das linhas
ctx.lineWidth = 5

//texto
ctx.beginPath()
ctx.shadowColor = '#f6f6f6'
ctx.shadowBlur = '25'
ctx.font = '18px cursive'
ctx.fillStyle = 'white'
ctx.fillText('Good Night', 10, 30)

//lua
ctx.beginPath()
ctx.shadowColor = '#0a0a0a'
ctx.shadowBlur = '25'
ctx.arc(570, 680, 190, 0, Math.PI * 2)
ctx.fillStyle = '#fff'
ctx.strokeStyle = '#fff'
ctx.fill()
ctx.stroke()

//Montanha 1
ctx.filter = 'drop-shadow(-9px 9px 2px #fff)'
ctx.fillStyle = 'black'
ctx.strokeStyle = '#000'
ctx.beginPath()
ctx.moveTo(1300, 500)
ctx.lineTo(1200, 300)
ctx.lineTo(1100, 600)
ctx.lineTo(1300, 800)
ctx.fill()
ctx.stroke()

//Montanha 3
ctx.fillStyle = '#000'
ctx.strokeStyle = 'black'
ctx.beginPath()
ctx.moveTo(750, 670)
ctx.lineTo(900, 400)
ctx.lineTo(1000, 670)
ctx.lineTo(700, 670)
ctx.stroke()
ctx.fill()

//Montanha 2 > direita p esquerda
ctx.fillStyle = '#000'
ctx.strokeStyle = 'black'
ctx.beginPath()
ctx.moveTo(1300, 800)
ctx.lineTo(1100, 300)
ctx.lineTo(700, 1100)
ctx.stroke()
ctx.fill()

//Montanha 4
ctx.fillStyle = '#000'
ctx.strokeStyle = 'black'
ctx.beginPath()
ctx.moveTo(850, 450)
ctx.lineTo(700, 670)
ctx.lineTo(850, 450)
ctx.lineTo(900, 670)
ctx.lineTo(700, 670)
ctx.stroke()
ctx.fill()

// Montanha 1 ESQUERDA
ctx.fillStyle = '#000'
ctx.strokeStyle = 'black'
ctx.beginPath()
ctx.moveTo(130, 150)
ctx.lineTo(130, 150)
ctx.lineTo(220, 670)
ctx.lineTo(-250, 670)
ctx.stroke()
ctx.fill()

//Montanha a esquerda 2
ctx.fillStyle = '#000'
ctx.strokeStyle = 'black'
ctx.beginPath()
ctx.moveTo(0, 600)
ctx.lineTo(200, 200)
ctx.lineTo(450, 670)
ctx.lineTo(-450, 670)
ctx.stroke()
ctx.fill()

//Linha
ctx.strokeStyle = 'black'
ctx.fillStyle = 'black'
ctx.beginPath()
ctx.moveTo(0, 670)
ctx.lineTo(915, 670)
ctx.lineTo(850, 800)
ctx.lineTo(0, 800)
ctx.lineTo(0, 670)
ctx.stroke()
ctx.fill()

//1º Estrada
ctx.strokeStyle = 'yellow'
ctx.beginPath()
ctx.moveTo(0, 735)
ctx.lineTo(100, 735)
ctx.moveTo(200, 735)
ctx.lineTo(300, 735)
ctx.moveTo(400, 735)
ctx.lineTo(500, 735)
ctx.moveTo(600, 735)
ctx.lineTo(700, 735)
ctx.moveTo(800, 735)
ctx.lineTo(882, 735)
ctx.stroke()
