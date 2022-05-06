input.onButtonPressed(Button.A, function () {
    radio.sendString("")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    if ("pozik" == receivedString) {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("")
})
radio.setGroup(30)
