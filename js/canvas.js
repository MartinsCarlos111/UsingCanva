var canva = document.getElementById("areaCanv"), ctx = canva.getContext("2d");
var img = document.getElementById("fundo");
ctx.drawImage(img, 0, 0);

//Função nova
ctx.beginPath();
ctx.bezierCurveTo(415, 600, 550, 450, 748, 600);
ctx.fillStyle = 'white';

//Montanha 1
ctx.moveTo(1300, 500);
ctx.lineTo(1200, 300)
ctx.moveTo(1150, 423);
ctx.lineTo(1200, 300);

//Montanha 2 > direita p esquerda
ctx.moveTo(1300, 800);
ctx.lineTo(1100, 300);
ctx.lineTo(699, 1100);

//Montanha 3
ctx.moveTo(950, 400);
ctx.lineTo(1000, 500);
ctx.moveTo(950, 400);
ctx.lineTo(775, 670);

//Montanha 4
ctx.moveTo(850, 450);
ctx.lineTo(700, 670);
ctx.moveTo(850, 450);
ctx.lineTo(900, 480);

//A esquerda Montanha 1
ctx.moveTo(130, 150);
ctx.lineTo(0, 400);
ctx.moveTo(180, 240);
ctx.lineTo(130, 150);
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (1300, 1300, 450, 150);

//Montanha a esquerda 2
ctx.moveTo(0, 600);
ctx.lineTo(200, 200);
ctx.moveTo(200, 200);
ctx.lineTo(450, 670);
ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (0, 600, 450, 70);

//Linha 
ctx.moveTo(0, 670);
ctx.lineTo(915, 670);


//1º Estrada
ctx.moveTo(0, 730);
ctx.lineTo(100, 730);

//2º Estrada
ctx.moveTo(700, 730);
ctx.lineTo(300, 730);
ctx.fillStyle = "rgba(54,54,54,0.8)";
ctx.fillRect (0, 670, 915, 300);

ctx.strokeStyle = "black";
ctx.stroke(); 
