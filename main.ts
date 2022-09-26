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
for (let index = 0; index <= 47; index++) {
    strip = neopixel.create(DigitalPin.P0, 48, NeoPixelMode.RGB)
    strip.setBrightness(100)
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(100)
}
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P1) == 0) {
        music.playMelody("E A A F D F A - ", 300)
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(1, 360)
            strip.show()
        }
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0 && pins.digitalReadPin(DigitalPin.P11) == 0) {
        music.playMelody("C A C C D C C - ", 300)
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(1, 360)
            strip.show()
        }
    } else {
    	
    }
})
basic.forever(function () {
    for (let index = 0; index <= 47; index++) {
        strip.setPixelColor(index, neopixel.rgb(randint(8, 47), randint(0, 47), randint(8, 47)))
        strip.show()
    }
    music.playMelody("C D A - C - D - ", 400)
})
