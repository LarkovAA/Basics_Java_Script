let game = {
    run() {
        while (true) {
            const direction = mover.getDirection();
            if (direction == null) {
                console.log('Игра окончена');
                return;
            }
            const nex_point = mover.get_next_position(direction);
            renderer.clear();
            player.move(nex_point);
            renderer.render();
        }
    },

    init() {
        console.log('Ваше положение на поле в виде о.');
        renderer.render();
        console.log('Что бы начать игру наберите game.run() и нажмите Enter.');


    }
}

game.init();