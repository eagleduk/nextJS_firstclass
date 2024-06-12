const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        firebaseURL:
          "nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app",
      },
    };
  }
  return {
    env: {
      firebaseURL:
        "nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app",
    },
  };
};
