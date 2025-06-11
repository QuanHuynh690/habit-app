import { Transform } from 'class-transformer';

export function TransformNumber(): PropertyDecorator {
  return Transform(({ value }) => {
    return parseInt(String(value), 10);
  });
}
