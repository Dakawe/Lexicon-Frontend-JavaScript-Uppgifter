
export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

export const checkHumidityLevel = (h) => h > 70 && E(),
  reportOverheating = (t) => (t > 500 && E(new OverheatingError(t))) || (t === null && E(new ArgumentError())),
  monitorTheMachine = ({ check, alertDeadSensor, alertOverheating, shutdown }) => {
    try {
      check();
    } catch (err) {
      if (err instanceof ArgumentError) alertDeadSensor();
      else if (err instanceof OverheatingError) err.temperature > 600 ? shutdown() : alertOverheating();
      else E(err);
    }
  },
  E = (e) => {
    throw e;
  };
