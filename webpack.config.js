const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const entry = {
  production: './src/index.tsx',
  development: './src/index.development.tsx'
}

module.exports = (env, argv) => {

  return {

    entry: entry[argv.mode],

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        inlineSource: 'index.js',
      }),
    ],

    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
      extensions: ['.tsx', '.ts', '.js'],
    },

  }

}
