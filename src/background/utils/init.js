export const preInitialize = [];
export const postInitialize = [];

export async function initialize(main) {
  await Promise.all(preInitialize.map(run));
  await run(main);
  await Promise.all(postInitialize.map(run));
  preInitialize.length = 0;
  postInitialize.length = 0;
}

async function run(init) {
  try {
    await (typeof init === 'function' ? init() : init);
  } catch (e) {
    console.error(e);
  }
}
