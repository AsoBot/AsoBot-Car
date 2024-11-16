//% weight=70 icon="\uf1ec" color=#1299AF block="AsoBot-Car"
namespace AsoBotCar {
    function lcdWriteRegister(reg: number, val: number) {
        let lcdAddr = 0x3e
        let cmd = (reg << 8) | val
        pins.i2cWriteNumber(lcdAddr, cmd, NumberFormat.UInt16BE)
    }

    //% block="イニシャライズ"
    export function lcdInit() {
        basic.pause(30)
        lcdWriteRegister(0x80, 0x20)
        basic.pause(1);
        lcdWriteRegister(0x80, 0x0c)
        basic.pause(1)
        lcdClearScreen()
    }

    //% block="画面をクリア"
    export function lcdClearScreen() {
        lcdWriteRegister(0x80, 0x01)
        basic.pause(2)
    }

    //% block="文字列|%text|を表示"
    export function lcdWriteText(text: string) {
        for (let index = 0; index <= text.length; index++) {
            lcdWriteRegister(0x40, text.charCodeAt(index))
        }
    }

    //% block="移動|%number|％で後退"
    //% back_percent.defl=50
    export function back(back_percent: number = 50) {
        // 入力値を0〜100に制限
        back_percent = Math.min(100, Math.max(0, back_percent));

        pins.servoWritePin(AnalogPin.P8, 90 + 90 * (back_percent / 100));
        pins.servoWritePin(AnalogPin.P15, 90 - 90 * (back_percent / 100));
    }

    //% block="移動|%number|％で前進"
    //% forward_percent.defl=50
    export function forward(forward_percent: number = 50) {
        // 入力値を0〜100に制限
        forward_percent = Math.min(100, Math.max(0, forward_percent));

        pins.servoWritePin(AnalogPin.P8, 90 - 90 * (forward_percent / 100));
        pins.servoWritePin(AnalogPin.P15, 90 + 90 * (forward_percent / 100));
    }

}
