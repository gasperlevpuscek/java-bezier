window.onload = function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1000;

    // save css size
    const cssWidth = canvas.width;
    const cssHeight = canvas.height;

    // increase actual size
    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;

    // scale context bacl
    ctx.scale(dpr, dpr);

    ctx.fillStyle = "#3c74ff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1.5;

    ctx.beginPath();

    ctx.moveTo(56, 378);
    // ctx.bezierCurveTo(C1x, C1y, C2x, C2y, x, y);
    // lowest curve
    ctx.bezierCurveTo(99, 399, 219, 389, 286, 355);
    ctx.bezierCurveTo(210, 380, 140, 390, 56, 378);

    // lower middle curve
    ctx.moveTo(60, 330);
    ctx.bezierCurveTo(-50, 352, 29, 365, 100, 370);
    ctx.bezierCurveTo(100, 370, 170, 375, 256, 353);
    ctx.bezierCurveTo(100, 370, 170, 375, 256, 353);
    ctx.bezierCurveTo(256, 353, 295, 340, 264, 333);
    ctx.bezierCurveTo(210, 350, 140, 360, 60, 330);

    // upper middle curve


    ctx.stroke();
    ctx.closePath();
    ctx.fill();
};
