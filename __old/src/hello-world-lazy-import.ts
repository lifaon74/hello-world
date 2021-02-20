
export async function helloWorldLazyImport() {
  const { helloWorldLazy } = await import('./hello-world-lazy');
  helloWorldLazy();
}
