module.exports = {
    setupFilesAfterEnv: ['./src/configs/enzyme.js'],
    "moduleNameMapper": {
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    },
      "globals": {
        "window": {}
      },
      
      
  };