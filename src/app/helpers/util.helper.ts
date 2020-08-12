import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

export function convertJsonToArrayOfObject<T, V>(
  classType: ClassType<T>,
  json: V[],
): T[] {
  return plainToClass(classType, json);
}

export function convertJsonToObject<T, V>(classType: ClassType<T>, json: V): T {
  return plainToClass(classType, json);
}
