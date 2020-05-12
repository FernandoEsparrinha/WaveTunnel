class Polygon extends Form {
    constructor(initialSpeed, option = {}) {
        super(initialSpeed, option)
        this.numberOfSides = globalSettings.wave.sides
    }

    display() {
        super.display()
        drawPolygon(this.numberOfSides)
        pop()
    }
}


function drawPolygon(n) {
    ang = ((180 * (n - 2)) / n) * (Math.PI / 180)
    alt = Math.tan(ang / 2) * 10

    translate(-10, alt)

    v0 = [0, 0]
    v1 = [20, 0]

    beginShape()
    vertex(v0[0], v0[1])
    vertex(v1[0], v1[1])
    for (i = 0; i < n - 2; i++) {
        x = v1[0] + (v0[0] - v1[0]) * Math.cos(ang) - (v0[1] - v1[1]) * Math.sin(ang)
        y = v1[1] + (v0[0] - v1[0]) * Math.sin(ang) + (v0[1] - v1[1]) * Math.cos(ang)

        vertex(x, y)
        v0 = v1
        v1 = [x, y]
    }
    endShape(CLOSE)
}
