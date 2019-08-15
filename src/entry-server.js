/* eslint-disable consistent-return, prefer-promise-reject-errors, arrow-body-style, no-param-reassign */
import createApp from "./main";

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();

    const meta = app.$meta();

    // route to server-side router's location
    router.push(context.url);

    context.meta = meta;

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      resolve(app);
    }, reject);
  });
};
