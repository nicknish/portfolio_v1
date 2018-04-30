const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const commonConfig = merge([{
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    }
  },
  parts.enforceLinting({
    loader: 'eslint-loader',
    exclude: /node_modules/
  }),
  parts.transformJS(),
  parts.loadImages({
    name: 'images/[name].[hash].[ext]'
  }),
  parts.generateHtml({
    template: './src/index.html'
  }),
  {
    stats: {
      colors: true,
      reasons: true, // better error messages
      chunks: true
    }
  }
]);

const productionConfig = merge([
  parts.extractSCSS({
    use: [{
        loader: 'css-loader',
        options: {
          minimize: true
        }
      },
      parts.autoprefixCSS(),
      'sass-loader'
    ]
  }),
  parts.copyImages([{
    from: './src/images/',
    to: 'images/'
  }])
]);

const developmentConfig = merge([{
    devtool: 'cheap-eval-source-map'
  },
  parts.loadSCSS(),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  })
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, {
      mode
    });
  }

  return merge(commonConfig, developmentConfig, {
    mode
  });
};
