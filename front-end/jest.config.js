module.exports = {
  setupFilesAfterEnv: ["./configs/enzyme.js"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "identity-obj-proxy",
  },
  globals: {
    window: {},
  },
  rootDir: "src",
  coverageDirectory: "../coverage",
  reporters: [
    "default",
    [
      "../node_modules/jest-html-reporter",
      {
        pageTitle: "Unit Test Report",
        outputPath: "./coverage/report.html",
      },
    ],
  ],
};