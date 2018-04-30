const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: 'errors-only',
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: false, // Open the page in browser
    historyApiFallback: true, // Use HTML5 History API based routing (client-side routing)
    overlay: true
  }
});

exports.enforceLinting = ({ exclude, loader }) => ({
  module: {
    rules: [
      {
        // enforces linting rules and prevents compilation
        enforce: 'pre',
        test: /\.jsx?$/,
        loader,
        exclude
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {}
    })
  ]
});

exports.transformJS = () => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
});

exports.loadSCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.scss$/,
        include,
        exclude,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
});

exports.extractSCSS = ({ include, exclude, use }) => {
  const plugin = new ExtractTextPlugin({
    // `allChunks` is needed to extract from extracted chunks as well.
    allChunks: true,
    filename: '[name].css'
  });

  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include,
          exclude,
          use: plugin.extract({
            use,
            fallback: 'style-loader'
          })
        }
      ]
    },
    plugins: [plugin]
  };
};

exports.autoprefixCSS = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')()]
  }
});

exports.loadImages = ({ name }) => ({
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name
          }
        }
      }
    ]
  }
});

exports.copyImages = (files = []) => ({
  plugins: [new CopyWebpackPlugin([...files])]
});

exports.generateHtml = ({ template }) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template
    })
  ]
});
