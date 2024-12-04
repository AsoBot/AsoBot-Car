//% color=#1299AF weight=100 icon="\uf544" block="AsoBot-Car"
namespace asobotcar {

    // グローバル変数として調整量を宣言（初期値0）
    let Adjust_percent: number = 0;

    //% block="バランス調整%value|左補正：-10～10：右補正"
    //% value.defl=0
    export function setAdjustPercent(value: number) {
        // 入力値を制限
        Adjust_percent = Math.max(-10, Math.min(10, value));
    }

    //% block="停止"
    export function stop() {
        pins.servoWritePin(AnalogPin.P8, 90);
        pins.servoWritePin(AnalogPin.P15, 90);
    }

    //% block="左回転|%forward_percent|％（0～100）"
    //% forward_percent.defl=50
    export function left(forward_percent: number = 50) {
        // 入力値を制限
        forward_percent = Math.max(0, Math.min(100, forward_percent));

        // 左右のモーター速度を計算
        let leftSpeed = 90 - (80 * forward_percent / 100) + Adjust_percent;  // 左モーター
        let rightSpeed = 90 - (80 * forward_percent / 100) + Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed = Math.max(0, Math.min(180, leftSpeed));
        rightSpeed = Math.max(0, Math.min(180, rightSpeed));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed);
        pins.servoWritePin(AnalogPin.P15, rightSpeed);
    }

    //% block="左旋回|%forward_percent|％の速度で|%turn_percent|％の左旋回"
    //% forward_percent.defl=50 turn_percent.defl=50
    export function turn_left(forward_percent: number = 50, turn_percent: number = 50) {
        // 入力値を制限
        forward_percent = Math.max(0, Math.min(100, forward_percent));

        // 左右のモーター速度を計算
        let leftSpeed2 = 90 - (80 * forward_percent / 100) * (forward_percent) + Adjust_percent;  // 左モーター
        let rightSpeed2 = 90 + (80 * forward_percent / 100) + Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed2 = Math.max(0, Math.min(180, leftSpeed2));
        rightSpeed2 = Math.max(0, Math.min(180, rightSpeed2));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed2);
        pins.servoWritePin(AnalogPin.P15, rightSpeed2);
    }

    //% block="右回転|%forward_percent|％（0～100）"
    //% forward_percent.defl=50
    export function right(forward_percent: number = 50) {
        // 入力値を制限
        forward_percent = Math.max(0, Math.min(100, forward_percent));

        // 左右のモーター速度を計算
        let leftSpeed3 = 90 + (80 * forward_percent / 100) + Adjust_percent;  // 左モーター
        let rightSpeed3 = 90 + (80 * forward_percent / 100) + Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed3 = Math.max(0, Math.min(180, leftSpeed3));
        rightSpeed3 = Math.max(0, Math.min(180, rightSpeed3));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed3);
        pins.servoWritePin(AnalogPin.P15, rightSpeed3);
    }

    //% block="右旋回|%forward_percent|％の速度で|%turn_percent|％の右旋回"
    //% forward_percent.defl=50 turn_percent.defl=50
    export function turn_right(forward_percent: number = 50, turn_percent: number = 50) {
        // 入力値を制限
        forward_percent = Math.max(0, Math.min(100, forward_percent));

        // 左右のモーター速度を計算
        let leftSpeed4 = 90 - (80 * forward_percent / 100) + Adjust_percent;  // 左モーター
        let rightSpeed4 = 90 + (80 * forward_percent / 100) * (forward_percent) + Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed4 = Math.max(0, Math.min(180, leftSpeed4));
        rightSpeed4 = Math.max(0, Math.min(180, rightSpeed4));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed4);
        pins.servoWritePin(AnalogPin.P15, rightSpeed4);
    }

    //% block="後退|%back_percent|％（0～100）"
    //% back_percent.defl=50
    export function back(back_percent: number = 50) {
        // 入力値を制限
        back_percent = Math.max(0, Math.min(100, back_percent));

        // 左右のモーター速度を計算
        let leftSpeed5 = 90 + (80 * back_percent / 100) - Adjust_percent;  // 左モーター
        let rightSpeed5 = 90 - (80 * back_percent / 100) - Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed5 = Math.max(0, Math.min(180, leftSpeed5));
        rightSpeed5 = Math.max(0, Math.min(180, rightSpeed5));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed5);
        pins.servoWritePin(AnalogPin.P15, rightSpeed5);
    }

    //% block="前進|%forward_percent|％（0～100）"
    //% forward_percent.defl=50
    export function forward(forward_percent: number = 50) {
        // 入力値を制限
        forward_percent = Math.max(0, Math.min(100, forward_percent));

        // 左右のモーター速度を計算
        let leftSpeed6 = 90 - (80 * forward_percent / 100) + Adjust_percent;  // 左モーター
        let rightSpeed6 = 90 + (80 * forward_percent / 100) + Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed6 = Math.max(0, Math.min(180, leftSpeed6));
        rightSpeed6 = Math.max(0, Math.min(180, rightSpeed6));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed6);
        pins.servoWritePin(AnalogPin.P15, rightSpeed6);
    }
}
