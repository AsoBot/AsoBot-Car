//% color=#1299AF weight=100 icon="\f5E4" block="AsoBot-Car"
namespace asobotcar {

    // グローバル変数として調整量を宣言（初期値0）
    let Adjust_percent: number = 0;

    // 内部共通関数：モーター速度を設定する
    function setMotorSpeed(leftSpeed: number, rightSpeed: number) {
        // 範囲制限（0～180）
        leftSpeed = Math.max(0, Math.min(180, leftSpeed));
        rightSpeed = Math.max(0, Math.min(180, rightSpeed));

        // サーボモーターに送信
        pins.servoWritePin(AnalogPin.P8, leftSpeed);
        pins.servoWritePin(AnalogPin.P15, rightSpeed);
    }

    // 内部共通関数：移動制御ロジック
    function calculateSpeed(baseSpeed: number, adjust: number, turn: number): [number, number] {
        const leftSpeed = 90 - 90 * (baseSpeed + adjust * (1 - turn)) / 100;
        const rightSpeed = 90 + 90 * (baseSpeed - adjust * (1 - turn)) / 100;
        return [leftSpeed, rightSpeed];
    }

    //% block="停止"
    export function stop() {
        setMotorSpeed(90, 90); // モーターを中立位置に設定
    }

    //% block="前進|%percent|％で移動"
    //% percent.defl=50
    export function forward(percent: number = 50) {
        const [leftSpeed, rightSpeed] = calculateSpeed(percent, Adjust_percent, 0);
        setMotorSpeed(leftSpeed, rightSpeed);
    }

    //% block="後退|%percent|％で移動"
    //% percent.defl=50
    export function back(percent: number = 50) {
        const [leftSpeed, rightSpeed] = calculateSpeed(-percent, Adjust_percent, 0);
        setMotorSpeed(leftSpeed, rightSpeed);
    }

    //% block="右旋回|前進%forward_percent|％速度|旋回%turn_percent|％"
    //% forward_percent.defl=50 turn_percent.defl=50
    export function turnRight(forward_percent: number = 50, turn_percent: number = 50) {
        const [leftSpeed, rightSpeed] = calculateSpeed(forward_percent, Adjust_percent, turn_percent / 100);
        setMotorSpeed(leftSpeed, rightSpeed);
    }

    //% block="左旋回|前進%forward_percent|％速度|旋回%turn_percent|％"
    //% forward_percent.defl=50 turn_percent.defl=50
    export function turnLeft(forward_percent: number = 50, turn_percent: number = 50) {
        const [leftSpeed, rightSpeed] = calculateSpeed(forward_percent, -Adjust_percent, turn_percent / 100);
        setMotorSpeed(leftSpeed, rightSpeed);
    }

    //% block="調整量を%value|％に設定（-50～50）"
    //% value.defl=0
    export function setAdjustPercent(value: number) {
        Adjust_percent = Math.max(-50, Math.min(50, value)); // -50～50の範囲内に制限
    }

}

