window.addEventListener("load", function () {
    const canvas = document.getElementById("bezierCanvas");
    const ctx = canvas.getContext("2d");

    /*
    const dpr = window.devicePixelRatio || 1;

    const cssWidth = parseInt(getComputedStyle(canvas).width, 10);
    const cssHeight = parseInt(getComputedStyle(canvas).height, 10);

    canvas.width = cssWidth * dpr;
    canvas.height = cssHeight * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    */
    canvas.width = 295;
    canvas.height = 400;

    ctx.fillStyle = "#3c74ff";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;

    ctx.beginPath();

    ctx.moveTo(237, 221);
    ctx.bezierCurveTo(255, 212, 285, 218, 286, 242);
    ctx.bezierCurveTo(288, 261, 268, 275, 253, 282);
    ctx.bezierCurveTo(248, 285, 235, 291, 230, 289);
    ctx.bezierCurveTo(242, 283, 260, 270, 267, 258);
    ctx.bezierCurveTo(274, 245, 273, 232, 260, 224);
    ctx.bezierCurveTo(256, 222, 251, 220, 247, 220);
    ctx.bezierCurveTo(243, 220, 241, 222, 237, 221);
    ctx.closePath();

    ctx.moveTo(220, 237);
    ctx.bezierCurveTo(220, 237, 209, 243, 209, 243);
    ctx.bezierCurveTo(202, 246, 178, 249, 169, 250);
    ctx.bezierCurveTo(143, 253, 117, 253, 90, 253);
    ctx.bezierCurveTo(80, 253, 59, 251, 49, 249);
    ctx.bezierCurveTo(45, 248, 37, 246, 35, 243);
    ctx.bezierCurveTo(31, 238, 43, 233, 46, 232);
    ctx.bezierCurveTo(56, 228, 67, 224, 78, 222);
    ctx.bezierCurveTo(83, 221, 87, 220, 92, 222);
    ctx.bezierCurveTo(86, 223, 72, 228, 67, 231);
    ctx.bezierCurveTo(65, 232, 60, 235, 62, 238);
    ctx.bezierCurveTo(63, 240, 68, 242, 71, 242);
    ctx.bezierCurveTo(77, 244, 95, 245, 101, 245);
    ctx.bezierCurveTo(128, 245, 156, 244, 183, 241);
    ctx.bezierCurveTo(183, 241, 207, 238, 207, 238);
    ctx.bezierCurveTo(211, 237, 216, 235, 220, 237);
    ctx.closePath();

    ctx.moveTo(210, 283);
    ctx.bezierCurveTo(205, 286, 188, 289, 182, 290);
    ctx.bezierCurveTo(170, 292, 157, 294, 145, 294);
    ctx.bezierCurveTo(145, 294, 130, 295, 130, 295);
    ctx.bezierCurveTo(130, 295, 115, 294, 115, 294);
    ctx.bezierCurveTo(104, 294, 92, 292, 81, 289);
    ctx.bezierCurveTo(76, 288, 70, 286, 66, 282);
    ctx.bezierCurveTo(59, 274, 75, 267, 81, 266);
    ctx.bezierCurveTo(77, 274, 81, 277, 89, 279);
    ctx.bezierCurveTo(94, 280, 111, 281, 116, 281);
    ctx.bezierCurveTo(116, 281, 144, 281, 144, 281);
    ctx.bezierCurveTo(144, 281, 169, 279, 169, 279);
    ctx.bezierCurveTo(169, 279, 196, 275, 196, 275);
    ctx.bezierCurveTo(196, 275, 210, 283, 210, 283);
    ctx.closePath();

    ctx.moveTo(203, 325);
    ctx.bezierCurveTo(196, 329, 187, 331, 179, 333);
    ctx.bezierCurveTo(158, 338, 129, 339, 107, 335);
    ctx.bezierCurveTo(100, 334, 87, 331, 81, 326);
    ctx.bezierCurveTo(74, 321, 75, 315, 83, 311);
    ctx.bezierCurveTo(85, 309, 88, 309, 90, 308);
    ctx.bezierCurveTo(89, 315, 92, 316, 98, 317);
    ctx.bezierCurveTo(104, 319, 120, 320, 126, 320);
    ctx.bezierCurveTo(126, 320, 145, 320, 145, 320);
    ctx.bezierCurveTo(152, 320, 162, 318, 170, 317);
    ctx.bezierCurveTo(173, 317, 181, 315, 184, 315);
    ctx.bezierCurveTo(188, 316, 200, 322, 203, 325);
    ctx.closePath();

    ctx.moveTo(265, 340);
    ctx.bezierCurveTo(273, 344, 269, 349, 263, 353);
    ctx.bezierCurveTo(254, 359, 239, 363, 229, 365);
    ctx.bezierCurveTo(191, 374, 150, 375, 111, 375);
    ctx.bezierCurveTo(111, 375, 96, 374, 96, 374);
    ctx.bezierCurveTo(75, 374, 47, 371, 26, 367);
    ctx.bezierCurveTo(20, 366, 6, 365, 3, 359);
    ctx.bezierCurveTo(0, 353, 10, 348, 14, 345);
    ctx.bezierCurveTo(23, 340, 35, 337, 45, 336);
    ctx.bezierCurveTo(50, 335, 56, 334, 60, 336);
    ctx.bezierCurveTo(52, 337, 40, 340, 33, 344);
    ctx.bezierCurveTo(31, 345, 25, 349, 27, 352);
    ctx.bezierCurveTo(29, 355, 35, 356, 38, 357);
    ctx.bezierCurveTo(49, 361, 61, 362, 72, 363);
    ctx.bezierCurveTo(72, 363, 105, 365, 105, 365);
    ctx.bezierCurveTo(105, 365, 122, 366, 122, 366);
    ctx.bezierCurveTo(122, 366, 137, 366, 137, 366);
    ctx.bezierCurveTo(137, 366, 154, 365, 154, 365);
    ctx.bezierCurveTo(173, 365, 193, 363, 212, 361);
    ctx.bezierCurveTo(224, 360, 243, 357, 254, 353);
    ctx.bezierCurveTo(260, 351, 266, 347, 265, 340);
    ctx.closePath();

    ctx.moveTo(59, 384);
    ctx.bezierCurveTo(59, 384, 85, 387, 85, 387);
    ctx.bezierCurveTo(85, 387, 118, 388, 118, 388);
    ctx.bezierCurveTo(118, 388, 134, 389, 134, 389);
    ctx.bezierCurveTo(134, 389, 149, 388, 149, 388);
    ctx.bezierCurveTo(180, 388, 225, 383, 255, 374);
    ctx.bezierCurveTo(263, 372, 270, 370, 277, 366);
    ctx.bezierCurveTo(277, 366, 286, 361, 286, 361);
    ctx.bezierCurveTo(284, 364, 284, 366, 281, 369);
    ctx.bezierCurveTo(271, 378, 247, 384, 234, 387);
    ctx.bezierCurveTo(192, 394, 162, 393, 120, 393);
    ctx.bezierCurveTo(120, 393, 78, 389, 78, 389);
    ctx.bezierCurveTo(72, 388, 64, 387, 59, 384);
    ctx.closePath();

    ctx.stroke();
    ctx.closePath();
    ctx.fill();

});