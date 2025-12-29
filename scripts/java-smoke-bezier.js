window.addEventListener("load", () => {
    const canvas = document.getElementById("bezierCanvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#e7a50cff";

    ctx.beginPath();

    ctx.moveTo(148, 222);
    ctx.bezierCurveTo(90, 167, 69, 144, 145, 89);
    ctx.bezierCurveTo(174, 65, 193, 53, 187, 7);
    ctx.bezierCurveTo(217, 51, 169, 93, 138, 118);
    ctx.bezierCurveTo(97, 155, 118, 177, 148, 222);
    ctx.closePath();

    ctx.moveTo(162, 235);
    ctx.bezierCurveTo(193, 194, 145, 198, 148, 150);
    ctx.bezierCurveTo(150, 125, 184, 102, 233, 87);
    ctx.bezierCurveTo(184, 119, 147, 135, 186, 180);
    ctx.bezierCurveTo(203, 206, 175, 227, 162, 235);
    ctx.closePath();

    ctx.fill();
});
