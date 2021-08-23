/*eslint-env node */
var path = require('path');

var rules = [
  {
    test: /\.js$/,
    use: ['babel-loader'],
    type: 'javascript/auto',
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    exclude: /\.global\.css$/,
    use: [
      {
        loader: 'style-loader',
        options: {sourceMap: true},
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  {
    test: /\.global\.css$/,
    use: ['style-loader', 'raw-loader'],
  },
];

module.exports = [{
  entry: './src/RichTextEditor.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'react-rte.js',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: rules,
  },
  mode: 'production',
  plugins: [
  ],
}, {
  entry: './src/demo.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'demo.js',
  },
  module: {
    rules: rules,
  },
}];
