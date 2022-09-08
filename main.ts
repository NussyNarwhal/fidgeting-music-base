input.onPinPressed(TouchPin.P0, function () {
    music.playMelody("A A A F D F A - ", 300)
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
    strip.setBrightness(255)
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        music.playMelody("C D A C5 A C5 A F ", 800)
        music.playMelody("D C D F C C C5 C5 ", 109)
        strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
        strip.setBrightness(255)
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
let strip: neopixel.Strip = null
basic.showIcon(IconNames.EigthNote)
music.playMelody("A F E D C B C5 C5 ", 400)
for (let index = 0; index <= 11; index++) {
    strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
    strip.setBrightness(100)
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(100)
}
basic.forever(function () {
    music.playMelody("C D A - C - D - ", 400)
})
basic.forever(function () {
    for (let index = 0; index <= 11; index++) {
        strip.setPixelColor(index, neopixel.rgb(randint(8, 10), randint(0, 10), randint(8, 10)))
        strip.show()
    }
})
