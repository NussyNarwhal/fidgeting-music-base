input.onPinPressed(TouchPin.P0, function () {
	
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
	
})
basic.showLeds(`
    . # . . .
    # . # . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showArrow(ArrowNames.North)
basic.forever(function () {
    music.playMelody("C D C - C - D E ", 600)
    music.playMelody("D E D - D C C C5 ", 600)
})
