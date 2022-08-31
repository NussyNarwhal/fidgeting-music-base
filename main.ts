let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        music.playMelody("C D A C5 A C5 A F ", 800)
        music.playMelody("D C D F C C C5 C5 ", 109)
        strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
        strip.setBrightness(255)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 1; index++) {
        music.playMelody("A A A F D F A - ", 300)
        strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
        strip.setBrightness(255)
        strip.showRainbow(1, 360)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1; index++) {
        music.playMelody("A F A F A F E D ", 300)
        music.playMelody("E - D C A F E D ", 120)
        music.playMelody("A A A F D F A - ", 300)
        strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
        strip.setBrightness(255)
    }
})
basic.forever(function () {
    music.playMelody("C D A - C - D - ", 400)
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    strip.setBrightness(100)
    strip.showRainbow(1, 360)
})
