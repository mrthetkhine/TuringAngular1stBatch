
const enum ShapeKind {
    circle = "circle",
    square = "square",
    rectangle = "rectangle",
}
type Circle = { kind: ShapeKind.circle, radius: number };
type Square = { kind: ShapeKind.square, size: number };
type Rectangle = { kind: ShapeKind.rectangle, w: number, h: number };
type Shape = Circle | Square | Rectangle;

function area(shape: Shape) {
    switch(shape.kind) {
        case ShapeKind.circle:
            return shape.radius ** 2;
        case ShapeKind.square:
            return shape.size ** 2;
        case ShapeKind.rectangle:
            return shape.w * shape.h;
        default:
            throw new Error("Invalid shape!");
    } 
}
let circle : Circle = {
    kind: ShapeKind.circle,
    radius: 5
};
console.log('Area ',area(circle));
