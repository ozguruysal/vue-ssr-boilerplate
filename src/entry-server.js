/* eslint-disable consistent-return, prefer-promise-reject-errors, arrow-body-style */
import createApp from "./main";

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();

    // route to server-side router's location
    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      resolve(app);
    }, reject);
  });
};
