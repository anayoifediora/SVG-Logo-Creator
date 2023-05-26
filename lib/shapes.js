class Shape {
    constructor(fill) {
        this.fill = fill;
    }
}

class Square extends Shape {
    constructor(x, y, width, height, fill) {
        super(fill)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    renderSquare() {
        return `<rect x = "${this.x}" y = "${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
    }
}

class Circle extends Shape {
    constructor(cx, cy, radius, fill) {
        super(fill)
        this.cx = cx;
        this.cy = cy;
        this.radius = radius;
    }
    
    renderCircle() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.radius}" fill="${this.fill}" />`
    }
}

class Triangle extends Shape {
    constructor(points, fill) {
        super(fill)
        this.points = points;
    }

    renderTriangle() {
        return `<polygon points="${this.points}" fill ="${this.fill}"/>`
    }
}

module.exports = {Square, Circle, Triangle}
