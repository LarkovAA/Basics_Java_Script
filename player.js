const player = {
    x: 0,
    y: 0,

    move(next_point) {
        this.x = next_point.x
        this.y = next_point.y
    }
}