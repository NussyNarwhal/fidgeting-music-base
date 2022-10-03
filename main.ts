let strip: neopixel.Strip = null
basic.showIcon(IconNames.EigthNote)
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
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(1, 360)
            strip.show()
        }
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0 && pins.digitalReadPin(DigitalPin.P11) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(1, 360)
            strip.show()
        }
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(1, 360)
            strip.show()
        }
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(1, 360)
            strip.show()
        }
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(1, 360)
            strip.show()
        }
    } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(1, 360)
            strip.show()
        }
    }
})
basic.forever(function () {
    for (let index = 0; index <= 47; index++) {
        strip.setPixelColor(index, neopixel.rgb(randint(8, 47), randint(0, 47), randint(8, 47)))
        strip.show()
    }
})
