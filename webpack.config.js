module.exports = {
  // 2 entry
  // ./src/index.js
  // ./src/auth/index.js
  // as you can see, we don't specify any index.html here
  entry: ['./src/index.js'],
  // ./build/build.js
  // public path: build/
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: 'build.js'
  },
  // how modules should be transformed
  module: {
    loaders: [
      // process .vue
      { test: /\.vue$/, loader: 'vue' },
      // test .js, loader babel, exclude node_modules.
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  // babel 2015, transofrm run-time
  // no babelrc
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
