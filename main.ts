let wylosowana = 0
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
let lista = [156, 233, 311, 466, 480, 550]
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        wylosowana = randint(1, 6)
        led.setBrightness(255)
        if (wylosowana < 6) {
            music.playTone(lista[wylosowana], music.beat(BeatFraction.Half))
        } else {
            music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
        }
        basic.showNumber(wylosowana)
        basic.pause(1000)
        led.setBrightness(109)
    }
})
