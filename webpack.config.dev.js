const path = require('path');

const appEntryPoint = path.resolve('src/index.jsx');
const outputDirectory = path.resolve('dist');

module.exports = {
  mode: 'development',
  entry: appEntryPoint,
  output: {
    path: outputDirectory,
    filename: 'webpack-app-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
