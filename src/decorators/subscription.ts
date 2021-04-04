import "reflect-metadata";

export function Query(name: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata("type", "Subscription", descriptor.value);
    Reflect.defineMetadata("name", name, descriptor.value);

    return descriptor;
  };
}