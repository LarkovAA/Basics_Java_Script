let renderer = {
    map: '',

    render() {
        for (let row = 0; row < config.rows_count; row++) {
            for (let col = 0; col < config.cols_count; col++) {
                if (player.x == col && player.y == row) {
                    this.map += 'о ';
                }
                else {
                    this.map += 'x ';
                }

            }
            this.map += '\n'
        }
        console.log(this.map);
    },
    clear() {
        console.clear;

        this.map = '';
    }
}