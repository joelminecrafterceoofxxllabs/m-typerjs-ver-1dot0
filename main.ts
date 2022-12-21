input.onButtonPressed(Button.A, function () {
    if (Abc == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
    }
    if (Abc == 1) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (Abc == 2) {
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
    }
    if (Abc == 3) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (Abc == 4) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # # # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    _do = 0
    _do = randint(1, 10)
    if (_do == 1) {
        basic.showString("make a cooking game.")
    }
    if (_do == 2) {
        basic.showString("make a fps game.")
    }
    if (_do == 3) {
        basic.showString("touch grass.")
    }
    if (_do == 4) {
        basic.showString("make a adventure/action game.")
    }
    if (_do == 5) {
        basic.showString("make a good video.")
    }
    if (_do == 6) {
        basic.showString("make a mini computer by your own.")
    }
    if (_do == 7) {
        basic.showString("make a sci-fi game.")
    }
    if (_do == 8) {
        basic.showString("make a gaming pc by your own.")
    }
    if (_do == 9) {
        basic.showString("make a custom pc.")
    }
    if (_do == 10) {
        basic.showString("win a mrbeast challage.")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Abc += 1
})
let _do = 0
let Abc = 0
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # . . . .
    # # . . .
    # . . . .
    # . . . .
    # # . . .
    `)
basic.showLeds(`
    # . . . .
    # # . . .
    # . # . .
    # . . . .
    # # # . .
    `)
basic.showLeds(`
    # . . . .
    # # . # .
    # . # . .
    # . . . .
    # # # # .
    `)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # # # # #
    `)
music.playMelody("F G B C E A B F ", 150)
for (let index = 0; index < 5; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . # .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . # # .
        . . . . .
        `)
}
basic.clearScreen()
music.playMelody("G A - - - - - - ", 175)
basic.showString("Hi")
