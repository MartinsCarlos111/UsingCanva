var canva = document.getElementById("areaCanv"), ctx = canva.getContext("2d");
var img = document.getElementById("fundo");
ctx.drawImage(img, 0, 0);

//laguinho

ctx.beginPath();
ctx.arc(250, 1100, 550, 2*3,14);
ctx.fillStyle = "rgb(112, 146, 190)";
ctx.fill();


ctx.moveTo(1300, 800);
ctx.lineTo(1100, 300);
ctx.lineTo(699, 1100);

//montanha 1
ctx.moveTo(1300, 500);
ctx.lineTo(1200, 300)
ctx.moveTo(1150, 423);
ctx.lineTo(1200, 300);


//montanha 3
ctx.moveTo(950, 400);
ctx.lineTo(1000, 500);
ctx.moveTo(950, 400);
ctx.lineTo(710, 800);

//montanha 4
ctx.moveTo(850, 450);
ctx.lineTo(700, 650);
ctx.moveTo(850, 450);
ctx.lineTo(890, 500);

//montanha a esquerda 1
ctx.moveTo(0, 600);
ctx.lineTo(200, 200);
ctx.moveTo(200, 200);
ctx.lineTo(350, 400);

//Montanha 2 esquerda
ctx.moveTo(500, 100);
ctx.lineTo(300, 500);
ctx.moveTo(750, 584);
ctx.lineTo(500, 100);


ctx.strokeStyle = "#fff";
ctx.stroke();