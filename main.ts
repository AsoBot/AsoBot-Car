//% color=#1299AF weight=100 icon="\f5E4" block="AsoBot-Car"
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
        let leftSpeed = 90 - (80 * forward_percent / 100) * (forward_percent) + Adjust_percent;  // 左モーター
        let rightSpeed = 90 + (80 * forward_percent / 100) + Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed = Math.max(0, Math.min(180, leftSpeed));
        rightSpeed = Math.max(0, Math.min(180, rightSpeed));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed);
        pins.servoWritePin(AnalogPin.P15, rightSpeed);
    }

    //% block="右回転|%forward_percent|％（0～100）"
    //% forward_percent.defl=50
    export function right(forward_percent: number = 50) {
        // 入力値を制限
        forward_percent = Math.max(0, Math.min(100, forward_percent));

        // 左右のモーター速度を計算
        let leftSpeed = 90 + (80 * forward_percent / 100) + Adjust_percent;  // 左モーター
        let rightSpeed = 90 + (80 * forward_percent / 100) + Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed = Math.max(0, Math.min(180, leftSpeed));
        rightSpeed = Math.max(0, Math.min(180, rightSpeed));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed);
        pins.servoWritePin(AnalogPin.P15, rightSpeed);
    }

    //% block="右旋回|%forward_percent|％の速度で|%turn_percent|％の右旋回"
    //% forward_percent.defl=50 turn_percent.defl=50
    export function turn_right(forward_percent: number = 50, turn_percent: number = 50) {
        // 入力値を制限
        forward_percent = Math.max(0, Math.min(100, forward_percent));

        // 左右のモーター速度を計算
        let leftSpeed = 90 - (80 * forward_percent / 100) + Adjust_percent;  // 左モーター
        let rightSpeed = 90 + (80 * forward_percent / 100) * (forward_percent) + Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed = Math.max(0, Math.min(180, leftSpeed));
        rightSpeed = Math.max(0, Math.min(180, rightSpeed));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed);
        pins.servoWritePin(AnalogPin.P15, rightSpeed);
    }

    //% block="後退|%back_percent|％（0～100）"
    //% back_percent.defl=50
    export function back(back_percent: number = 50) {
        // 入力値を制限
        back_percent = Math.max(0, Math.min(100, back_percent));

        // 左右のモーター速度を計算
        let leftSpeed = 90 + (80 * back_percent / 100) - Adjust_percent;  // 左モーター
        let rightSpeed = 90 - (80 * back_percent / 100) - Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed = Math.max(0, Math.min(180, leftSpeed));
        rightSpeed = Math.max(0, Math.min(180, rightSpeed));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed);
        pins.servoWritePin(AnalogPin.P15, rightSpeed);
    }

    //% block="前進|%forward_percent|％（0～100）"
    //% forward_percent.defl=50
    export function forward(forward_percent: number = 50) {
        // 入力値を制限
        forward_percent = Math.max(0, Math.min(100, forward_percent));

        // 左右のモーター速度を計算
        let leftSpeed = 90 - (80 * forward_percent / 100) + Adjust_percent;  // 左モーター
        let rightSpeed = 90 + (80 * forward_percent / 100) + Adjust_percent; // 右モーター

        // 範囲制限（モーターの値が0～180を超えないようにする）
        leftSpeed = Math.max(0, Math.min(180, leftSpeed));
        rightSpeed = Math.max(0, Math.min(180, rightSpeed));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed);
        pins.servoWritePin(AnalogPin.P15, rightSpeed);
    }
}