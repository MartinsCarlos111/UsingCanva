var canva = document.getElementById("areaCanv"), ctx = canva.getContext("2d");

//Função nova

ctx.bezierCurveTo(415, 600, 550, 450, 748, 600);
ctx.fillStyle = '#FFFF00';
ctx.fill();
ctx.stroke();

//Montanha 1
ctx.fillStyle = 'black';
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(1300, 500);
ctx.lineTo(1200, 300);
ctx.lineTo(1100, 600);
ctx.lineTo(1300, 800);
ctx.fill();
ctx.stroke();

//Montanha 2 > direita p esquerda
ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(1300, 800);
ctx.lineTo(1100, 300);
ctx.lineTo(700, 1100);
ctx.stroke();
ctx.fill();

//Montanha 3
ctx.fillStyle = "black";
ctx.beginPath();
ctx.moveTo(950, 400);
ctx.lineTo(1000, 500);
ctx.lineTo(900, 650);
ctx.stroke();

//Montanha 4
ctx.moveTo(850, 450);
ctx.lineTo(700, 670);
ctx.moveTo(850, 450);
ctx.lineTo(900, 480);
ctx.stroke();

// Montanha 1
ctx.moveTo(130, 150);
ctx.lineTo(0, 400);
ctx.moveTo(180, 240);
ctx.lineTo(130, 150);
ctx.stroke();

//Montanha a esquerda 2
ctx.moveTo(0, 600);
ctx.lineTo(200, 200);
ctx.moveTo(200, 200);
ctx.lineTo(450, 670);
ctx.stroke();

//Linha 
ctx.moveTo(0, 670);
ctx.lineTo(915, 670);
ctx.stroke();

//1º Estrada
ctx.strokeStyle = "red";
ctx.stroke();
ctx.moveTo(0, 730);
ctx.lineTo(100, 730);

//2º Estrada
ctx.moveTo(700, 730);
ctx.lineTo(300, 730);
ctx.stroke();
ctx.strokeStyle = "white";
ctx.stroke(); 
