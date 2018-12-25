import { ThemedStyledProps } from 'styled';

export enum SocketColorStyle {
  Red = 'red',
  Green = '#2ECC2E',
  Blue = '#4444FF',
  White = 'white',
}

export type SocketColorsInputProps = ThemedStyledProps<{
  socketColor: SocketColorStyle;
}>;

export type SocketColorsValues = {
  blue: string;
  green: string;
  red: string;
  white: string;
};

export type SocketColorsProps = {
  value: SocketColorsValues;
  onChange?: (value: SocketColorsValues) => void;
};
