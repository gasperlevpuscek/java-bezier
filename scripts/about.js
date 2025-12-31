addEventListener("DOMContentLoaded", function () {
  const aboutElements = document.querySelectorAll('#aboutJs');

  aboutElements.forEach(function (element) {
    element.addEventListener('click', function () {
      Swal.fire({
        title: 'Java Bezier',
        html: `
    <p style="margin-bottom: 16px;">
      This website showcases three different ways of displaying images:
      <strong>SVG</strong>, <strong>Canvas</strong>, and <strong>standard images</strong>.
    </p>

    <hr style="margin: 18px 0; opacity: 0.4;">

    <p style="margin: 4px 0; font-size: 14px; color: #666;">
      Author: Gašper Levpušček
    </p>
    <p style="margin: 0; font-size: 14px; color: #666;">
      License: MIT License
    </p>
  `,
        imageUrl: 'images/javaLogo.png',
        imageWidth: 80,
        imageHeight: 108,
        imageAlt: 'Java logo',
        confirmButtonText: 'Close',
        confirmButtonColor: '#153763'
      });
    });
  });
});