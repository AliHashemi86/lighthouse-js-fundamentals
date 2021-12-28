function calculateRectangleArea(length, width) {
  let rectangle = length * width;
  if (length > 0 && width > 0) {
    return rectangle;
  }
}
console.log(calculateRectangleArea(2,3));



function calculateTriangleArea(base, height) {
  let triangle = base * height / 2;
  if (base > 0 && height > 0) {
    return triangle;
  }
}
console.log(calculateTriangleArea(2,3));



function calculateCircleArea(radius) {
  let π = 3.141592;
  let circle = π * radius * radius;
  if (radius > 0) {
    return circle;
  }
}
console.log(calculateCircleArea(2,3));
