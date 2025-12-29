window.addEventListener("load", () => {
    const canvas = document.getElementById("bezierCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 295;
    canvas.height = 400;

    ctx.fillStyle = "white";

    ctx.beginPath();

    ctx.moveTo(56, 387);
    ctx.bezierCurveTo(56, 387, 228, 408, 291, 362);
    ctx.bezierCurveTo(288, 396, 185, 398, 152, 398);
    ctx.bezierCurveTo(65, 398, 56, 387, 56, 387);
    ctx.closePath();

    ctx.moveTo(63, 340);
    ctx.bezierCurveTo(63, 340, 41, 335, 12, 350);
    ctx.bezierCurveTo(-10, 365, 13, 369, 19, 370);
    ctx.bezierCurveTo(50, 376, 178, 392, 258, 362);
    ctx.bezierCurveTo(287, 350, 266, 342, 267, 342);
    ctx.bezierCurveTo(269, 347, 272, 352, 259, 356);
    ctx.bezierCurveTo(179, 379, 40, 369, 28, 357);
    ctx.bezierCurveTo(18, 348, 63, 340, 63, 340);
    ctx.closePath();

    ctx.moveTo(93, 311);
    ctx.bezierCurveTo(91, 311, 77, 314, 76, 322);
    ctx.bezierCurveTo(76, 339, 154, 354, 208, 328);
    ctx.bezierCurveTo(194, 321, 207, 328, 188, 318);
    ctx.bezierCurveTo(166, 325, 74, 328, 93, 311);
    ctx.closePath();

    ctx.moveTo(85, 268);
    ctx.bezierCurveTo(85, 268, 65, 273, 65, 281);
    ctx.bezierCurveTo(65, 300, 161, 305, 213, 286);
    ctx.bezierCurveTo(208, 284, 201, 279, 200, 277);
    ctx.bezierCurveTo(173, 284, 82, 289, 80, 276);
    ctx.bezierCurveTo(79, 273, 85, 268, 85, 268);
    ctx.closePath();

    ctx.moveTo(99, 223);
    ctx.bezierCurveTo(75, 222, -20, 247, 74, 255);
    ctx.bezierCurveTo(134, 261, 186, 252, 213, 246);
    ctx.bezierCurveTo(225, 239, 227, 238, 227, 237);
    ctx.bezierCurveTo(179, 250, -21, 256, 99, 223);
    ctx.closePath();

    ctx.moveTo(238, 225);
    ctx.bezierCurveTo(278, 213, 298, 261, 229, 295);
    ctx.bezierCurveTo(339, 264, 276, 198, 238, 225);
    ctx.closePath();
    ctx.fill();
});
