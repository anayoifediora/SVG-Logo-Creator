const shapes = require('./shapes');

// A testing suite for Squares is created.
describe('renderSquare', () => {
    it('should take x and y coordinates, width, height and fill properties', () => {
        const newSquare = new shapes.Square(100, 100, 200, 200, 'red');
        expect(newSquare.renderSquare()).toEqual('<rect x = "100" y = "100" width="200" height="200" fill="red" />');
    })
    
});

// A testing suite for Circles is created.
describe('renderCircle', () => {
    it('should take x and y coordinates from the centre of circle, radius and fill properties', () => {
        let newCircle = new shapes.Circle(195, 150, 100, "blue");
        expect(newCircle.renderCircle()).toEqual('<circle cx="195" cy="150" r="100" fill="blue" />');
    })
});

// A testing suite for Triangles is created.
describe('renderTriangle', () => {
    it('should take 6 values for points and fill properties', () => {
        let newTriangle = new shapes.Triangle("100, 100 200, 300 300, 100", 'green');
        expect(newTriangle.renderTriangle()).toEqual('<polygon points="100, 100 200, 300 300, 100" fill ="green"/>');
    })
});