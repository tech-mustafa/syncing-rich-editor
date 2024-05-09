function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to check if a color is dark or light
function isColorDark(color) {
  const rgb = parseInt(color.substring(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.5;
}

// Generate a random color that contrasts well with white background
export function generateVisibleRandomColor() {
  let color = generateRandomColor();
  while (!isColorDark(color)) {
    color = generateRandomColor();
  }
  return color;
}
