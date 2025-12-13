
## Project Structure

```
java-bezier/
├── index.html              # Main HTML file with SVG and canvas elements
├── scripts/
│   ├── java-cup-bezier.js  # Canvas bezier curves for the coffee cup
│   └── java-smoke-bezier.js # Canvas bezier curves for smoke
├── styles/
│   └── style.css           # Styling and layout
├── svg-code/
│   ├── img-layer-1.svg     # SVG layer 1
│   └── img-layer-2.svg     # SVG layer 2
├── javaLogo.png            # Java logo image
└── README.md               # This file
```

## How It Works

- **HTML**: Embeds SVG graphics directly in the DOM and provides a canvas element for bezier curve animations
- **CSS**: Handles styling, layout, and basic responsive design with flexbox
- **JavaScript**: Uses the HTML5 Canvas API with `bezierCurveTo()` to draw smooth curves for the cup and animated steam effects

## Technologies Used

- HTML5
- CSS3
- JavaScript (Canvas API)
- SVG

## Notes

This project is created purely as a practice exercise and does not represent a production-ready application. It serves as a learning resource for understanding bezier curves and canvas-based graphics rendering.

## Author

Gašper Levpušček

## License

See [LICENSE](LICENSE) file for details.