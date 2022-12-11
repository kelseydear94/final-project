input.onButtonPressed(Button.A, function () {
    turn += 270
    y = 0
    x = -1
})
input.onButtonPressed(Button.AB, function () {
    x = 0
    y = -1
})
input.onButtonPressed(Button.B, function () {
    turn += 90
    x = -1
    y = 0
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    y = 1
    x = 0
})
let sbhvdakjlf = 0
let x = 0
let y = 0
let snake_2 = game.createSprite(2, 2)
let diff = 800
let snake = game.createSprite(2, 2)
let apple = game.createSprite(1, 1)
game.setScore(0)
y = 0
x = 0
let turn = 0
basic.forever(function () {
    basic.pause(diff)
    snake.move(1)
    snake_2.move(1)
    snake.turn(Direction.Right, turn)
    snake_2.turn(Direction.Right, turn)
    turn = 0
})
basic.forever(function () {
    if (apple.isTouching(snake)) {
        apple.delete()
        snake_2.delete()
        apple = game.createSprite(randint(0, 4), randint(1, 3))
    }
})
basic.forever(function () {
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 1) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 2) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 3) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 4) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 0) {
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 1) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 2) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 3) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
    if (snake.get(LedSpriteProperty.X) == 4) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            game.gameOver()
        }
    }
})
basic.forever(function () {
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 1) {
            snake.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 1) {
            snake.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 2) {
            snake.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 3) {
            snake.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake.get(LedSpriteProperty.Y) == 4) {
            snake.change(LedSpriteProperty.X, 4)
        }
    }
})
basic.forever(function () {
    if (snake_2.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake_2.get(LedSpriteProperty.Y) == 1) {
            snake_2.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake_2.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake_2.get(LedSpriteProperty.Y) == 1) {
            snake_2.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake_2.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake_2.get(LedSpriteProperty.Y) == 2) {
            snake_2.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake_2.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake_2.get(LedSpriteProperty.Y) == 3) {
            snake_2.change(LedSpriteProperty.X, 4)
        }
    }
    if (snake_2.get(LedSpriteProperty.X) == 0) {
        sbhvdakjlf = 0
        if (snake_2.get(LedSpriteProperty.Y) == 4) {
            snake_2.change(LedSpriteProperty.X, 4)
        }
    }
})
