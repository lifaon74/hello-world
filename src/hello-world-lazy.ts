
export function helloWorldLazy() {
  // @ts-ignore
  console.log('Hello world lazy', import.meta.url);
}
