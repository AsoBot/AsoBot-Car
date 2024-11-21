//% color=#1299AF weight=100 icon="\f544" block="AsoBot-Car"
namespace asobotcar {

    //% block="停止"
    export function stop() {
        pins.servoWritePin(AnalogPin.P8, 90);
        pins.servoWritePin(AnalogPin.P15, 90);
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
