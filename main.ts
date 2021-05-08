input.onButtonPressed(Button.AB, function () {
    radio.sendString("What's up ?")
})
radio.onReceivedString(function (receivedString) {
    music.playMelody("E B C5 A B G A F ", 120)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showString(receivedString)
})
radio.setGroup(123)
basic.forever(function () {
	
})
