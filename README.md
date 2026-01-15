# Java Bezier

An interactive frontend project exploring different ways of displaying images and rendering Bezier curves using JavaScript.

## Overview

Java Bezier is a project focused on experimenting with **Bezier curves** and exploring different image-rendering techniques on the web. It demonstrates implementations using SVG paths, the HTML Canvas API, and standard image elements.

## Features

- SVG Bezier curves (SVG path data)
- Canvas Bezier curves (HTML Canvas API)
- Standard image rendering with `<img>`
- JavaScript interaction for generating/displaying curves
- Simple, clean UI inspired by the Java platform design

## Project structure

```text
java-bezier/
├── images/
│   └── javaLogo.png
├── scripts/
│   ├── about.js
│   ├── java-cup-bezier.js
│   └── java-smoke-bezier.js
├── styles/
│   └── style.css
├── svg-code/
│   ├── java-cup-path.svg
│   └── java-smoke-path.svg
├── index.html
├── LICENSE
└── README.md
```

## Rendering methods

### SVG
Curves defined with SVG path elements. Scalable and precise.
<p align="center">
<img width="810" height="407" alt="java_svg_image" src="https://github.com/user-attachments/assets/5728ee42-5829-4934-a0af-91c4df3d2a98" />
</p>
### Canvas
Programmatic drawing with the HTML Canvas API for dynamic rendering.
<p align="center">
<img width="518" height="642" alt="java_canvas_image" src="https://github.com/user-attachments/assets/df1c711e-d080-4004-9c9b-81498093ce9c" />
</p>
### Standard images
PNG images displayed with `<img>` for raster comparison.
<p align="center">
<img width="500" height="650" alt="java_png_image" src="https://github.com/user-attachments/assets/8525a376-6b68-49b0-9a69-fea2b1c88e1a" />
</p>

## Getting started

1. Clone the repository:
   ```bash
   git clone https://github.com/gasperlevpuscek/java-bezier.git
   cd java-bezier
   ```
2. Open `index.html` in your browser or serve the directory with a static server.

## Technologies used

- HTML5
- CSS3
- JavaScript
- SVG
- HTML Canvas
- SweetAlert2 

## Disclaimer

This project is an independent project and is not affiliated with, endorsed by, or sponsored by Oracle or the Java platform.

## Author

Gašper Levpušček

## License

This project is licensed under the MIT License. See the LICENSE file for details.

