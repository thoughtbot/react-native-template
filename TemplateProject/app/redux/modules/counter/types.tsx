export const DECREMENT = "DECREMENT";
export type DECREMENT = typeof DECREMENT;

export const INCREMENT = "INCREMENT";
export type INCREMENT = typeof INCREMENT;

export interface DecrementCounter {
  type: DECREMENT;
}

export interface IncrementCounter {
  type: INCREMENT;
}

export type CounterAction = DecrementCounter | IncrementCounter;
