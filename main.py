pins.set_pull(DigitalPin.P8, PinPullMode.PULL_UP)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P8) == 1:
        basic.show_number(0)
    elif pins.digital_read_pin(DigitalPin.P8) == 1:
        basic.show_number(1)
    else:
        basic.clear_screen()
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)
