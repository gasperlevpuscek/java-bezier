window.addEventListener("load", function () {
    const canvas = document.getElementById("java-canvas-id");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ff8623ff";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    // left
    ctx.moveTo(189, 7);
    ctx.bezierCurveTo(202, 20, 197, 46, 189, 61);
    ctx.bezierCurveTo(181, 76, 168, 89, 155, 101);
    ctx.bezierCurveTo(137, 116, 117, 130, 117, 156);
    ctx.bezierCurveTo(117, 177, 137, 195, 146, 213);
    ctx.bezierCurveTo(139, 210, 129, 198, 123, 192);
    ctx.bezierCurveTo(118, 187, 111, 178, 107, 172);
    ctx.bezierCurveTo(104, 168, 101, 162, 100, 158);
    ctx.bezierCurveTo(91, 131, 113, 113, 132, 98);
    ctx.bezierCurveTo(154, 81, 182, 62, 189, 33);
    ctx.bezierCurveTo(191, 23, 190, 17, 189, 7);
    ctx.closePath();

    // right
    ctx.moveTo(229, 85);
    ctx.bezierCurveTo(229, 85, 230, 86, 230, 86);
    ctx.bezierCurveTo(215, 95, 195, 108, 183, 120);
    ctx.bezierCurveTo(176, 127, 171, 135, 171, 145);
    ctx.bezierCurveTo(172, 164, 196, 176, 192, 197);
    ctx.bezierCurveTo(191, 200, 190, 203, 189, 206);
    ctx.bezierCurveTo(186, 210, 183, 214, 180, 217);
    ctx.bezierCurveTo(176, 221, 172, 224, 167, 227);
    ctx.bezierCurveTo(170, 220, 173, 217, 174, 209);
    ctx.bezierCurveTo(175, 197, 166, 190, 160, 181);
    ctx.bezierCurveTo(153, 170, 150, 163, 150, 150);
    ctx.bezierCurveTo(150, 136, 157, 126, 167, 117);
    ctx.bezierCurveTo(184, 101, 207, 93, 229, 85);
    ctx.closePath();

    ctx.stroke();
    ctx.fill();
});
