var webpack = require('webpack');
var path = require('path');

const node_dir = __dirname + '/node_modules';
const buildPath = path.resolve(__dirname, './dist');


module.exports = [{
  mode: 'development',
  devtool: 'source-map',
  entry: {
    'crossweb':'./src/crossweb.js',
    'polyfill':'babel-polyfill'
  },
  output: {
    path: buildPath,
    publicPath: '/dist',    
    filename: '[name].' +'js',
    library: '[name]',
    libraryTarget: 'umd'
  },
  plugins: [	  
	  new webpack.ProvidePlugin({"$": "jquery","jQuery": "jquery"}),
  ],
  optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: "initial",
					name: "vendor",
					priority: 10,
					enforce: true
				}
			}
		}
  },
  module: {
	  rules :[
		  {test: /\.html$/, loader: "html-loader" },
		  {test: /\.css$/, loaders: ["style-loader","css-loader"]},
			{test: /\.js$/, loaders: ["babel-loader"]},
			{test: /\.(jpe?g|png|gif)$/i,loader:"file-loader",  query:{name:'[path][name].[ext]', outputPath:'images/'}}
	  ]	  
  },
  resolve: {	    
	  modules:[
	      path.resolve(__dirname,node_dir)
	  ]
  },
  devServer: {
	    contentBase: path.join(__dirname, ""),	    
	    port: 5001,
	    watchOptions: {
	      aggregateTimeout: 300,
	      poll: 1000
	    }
  }
}];