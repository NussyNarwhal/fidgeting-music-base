let strip: neopixel.Strip = null
for (let index = 0; index <= 47; index++) {
    strip = neopixel.create(DigitalPin.P0, 48, NeoPixelMode.RGB)
    strip.setBrightness(100)
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(16)
}
for (let index = 0; index <= 47; index++) {
    strip = neopixel.create(DigitalPin.P0, 48, NeoPixelMode.RGB)
    strip.setBrightness(100)
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(16)
}
for (let index = 0; index <= 47; index++) {
    strip = neopixel.create(DigitalPin.P0, 48, NeoPixelMode.RGB)
    strip.setBrightness(100)
    strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(16)
}
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(80, 90)
            strip.show()
        }
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0 && pins.digitalReadPin(DigitalPin.P11) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(100, 120)
            strip.show()
        }
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(180, 200)
            strip.show()
        }
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(231, 260)
            strip.show()
        }
    }
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        for (let index = 0; index < 60; index++) {
            strip.showRainbow(330, 360)
            strip.show()
        }
    } else if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        for (let index = 0; index <= 47; index++) {
            strip.showRainbow(11, 30)
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
