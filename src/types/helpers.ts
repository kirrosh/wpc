import { Reducer } from 'react';

// export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
// export type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

type Signature<T> = T extends (...args: infer R) => any ? (...args: R) => void : any;
// may be useful for tests
// export type DispatchPropsSignature<T> = Record<keyof T, Signature<T[keyof T]>>;

export type ReducerState<T> = T extends Reducer<infer S, any> ? S : any;

// can be useful in future
// export type Thunk<R = void> = ThunkAction<R, IRootStore, void, Action>;

export type DispatchFunc<T> =
    // T extends (...args: infer T) => Thunk<infer R> ? (...args: T) => R :
    T extends (...args: any[]) => any ? Signature<T> : any;

export type DispatchProps<T> = { [P in keyof T]: DispatchFunc<T[P]> };
export type StateProps<T extends (...args: any[]) => any> = ReturnType<T>;
