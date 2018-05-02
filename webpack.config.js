const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const commonConfig = merge([
  {
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
  {
    output: {
      filename: '[name].[chunkhash].js'
    }
  },
  parts.cleanBuildDirectory('dist/'),
  parts.extractSCSS({
    use: [
      {
        loader: 'css-loader',
        options: { minimize: true }
      },
      parts.autoprefixCSS(),
      'sass-loader'
    ]
  }),
  parts.copyFiles([
    {
      from: './src/images/',
      to: 'images/'
    },
    {
      from: './_redirects'
    }
  ]),
  {
    // Split bundles into vendor and main code
    optimization: {
      splitChunks: {
        chunks: 'initial'
      }
    }
  }
]);

const developmentConfig = merge([
  {
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
