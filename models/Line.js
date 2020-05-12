class Line extends Form {
    constructor(initialSpeed, option = {}) {
        super(initialSpeed, option)
        this.lineLength = globalSettings.wave.sides
    }

    display() {
        super.display()
        drawLine(this.lineLength)
        pop()
    }
}

function drawLine(lineLength) {
    push()
    translate(lineLength, 0)
    v0 = [0, 0]
    v1 = [lineLength, 0]
    line(v0[0], v0[1], v1[0], v1[1])
    pop()

    push()
    translate(-lineLength, 0)
    v0 = [0, 0]
    v1 = [-lineLength, 0]
    line(v0[0], v0[1], v1[0], v1[1])
    pop()

    push()
    translate(0, lineLength)
    v0 = [0, 0]
    v1 = [0, lineLength]
    line(v0[0], v0[1], v1[0], v1[1])
    pop()

    push()
    translate(0, -lineLength)
    v0 = [0, 0]
    v1 = [0, -lineLength]
    line(v0[0], v0[1], v1[0], v1[1])
    pop()
}

