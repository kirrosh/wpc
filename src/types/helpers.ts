export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

type Signature<T> = T extends (...args: infer R) => any ? (...args: R) => void : any;

export type DispatchPropsSignature<T> = Record<keyof T, Signature<T[keyof T]>>;
