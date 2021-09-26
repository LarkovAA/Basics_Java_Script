let mover = {
    getDirection() {
        const available_directions = [1, 2, 3, 4, 6, 7, 8, 9]
        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8 или 9) куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            if (!available_directions.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            }
            return direction
        }
    },
    get_next_position(direction) {
        const next_position = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                next_position.y++;
                next_position.x--;
                break;
            case 2:
                next_position.y++;
                break;
            case 3:
                next_position.y++;
                next_position.x++;
                break;
            case 4:
                next_position.x--;
                break;
            case 6:
                next_position.x++;
                break;
            case 7:
                next_position.y--;
                next_position.x--;
                break;
            case 8:
                next_position.y--;
                break;
            case 9:
                next_position.y--;
                next_position.x++;
                break;
        }
        // Проверка не уходит ли позиция игрока за экран
        if ((next_position.x < 0 || next_position.x > 10) || (next_position.y < 0 || next_position.y > 10)) {
            next_position.x = player.x
            next_position.y = player.y
        }

        return next_position;
    }
}