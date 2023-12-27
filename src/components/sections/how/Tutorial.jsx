import { WebpackImg } from "../../Images";
import "./Tutorial.css";

export default function Tutorial() {
  return (
    <div className={`node`}>
      <h4>Tutorial</h4>
      <div className="top">
        <h4>What is React?</h4>
        <p>
          React is a javascript library that is built-in for User Interfaces.{" "}
          <br />
          were not ganna takle more on react details and <br /> were focus on
          creating a template
        </p>
        <div className="detail">
          <div className="install">
            <h4>Install Dependencies</h4>
            <p className="desc">
              copy these commands and paste it in your terminal on vscode.
            </p>
            <p className="desc">Initialized package.json</p>
            <div className="cli">
              <p>bash</p>
              <div className="terminal">
                <pre>$ npm init -y</pre>
              </div>
            </div>
            <p className="desc">install React</p>
            <div className="cli">
              <p>bash</p>
              <div className="terminal">
                <pre>$ npm i react react-dom</pre>
              </div>
            </div>
            <p className="desc">install webpack as dev Dependencies</p>
            <div className="cli">
              <p>bash</p>
              <div className="terminal">
                <pre>$ npm i webpack webpack-cli webpack-dev-server -D</pre>
              </div>
            </div>
            <p className="desc">install webpack's loaders</p>
            <div className="cli">
              <p>bash</p>
              <div className="terminal">
                <pre>
                  $ npm i css-loader style-loader sass sass-loader
                  esbuild-loader -D
                </pre>
              </div>
            </div>
            <p>Util plugins</p>
            <div className="cli">
              <p>bash</p>
              <div className="terminal">
                <pre>$ npm i copy-webpack-plugin html-webpack-plugin -D</pre>
              </div>
            </div>
            <p>Environment Variable Plugin and Optimizer</p>
            <div className="cli">
              <p>bash</p>
              <div className="terminal">
                <pre>$ npm i terser-webpack-plugin dotenv-webpack -D</pre>
              </div>
            </div>
          </div>
        </div>
        <h4>Setup Webpack configurations</h4>
        <p>Create on your root directory filename copy these config</p>
        <div className="file">
          <div className="icon">
            <img src={WebpackImg} alt="webpack" />
          </div>
          <pre>webpack.config.js</pre>
        </div>
        <p>
          I won't go into explaining every detail of these configurations,{" "}
          <br />
          but if you're interested in learning Webpack fully, <br />
          feel free to message me for more information.
        </p>
        <div className="cli">
          <p>webpack.config.js</p>
          <div className="terminal">
            <pre className="code">
              <span className="const">const</span> <span className="var">HtmlWebpackPlugin</span> = require('html-webpack-plugin'); <br />
              <span className="const">const</span> <span className="var">CopyWebpackPlugin</span> = require('copy-webpack-plugin'); <br />
              <span className="const">const</span> <span className="var">Dotenv</span> = require('dotenv-webpack'); <br />
              <span className="const">const</span> <span className="var">path</span> = require('path'); <br />
              <span className="const">const</span> <span className="var">webpack</span> = require('webpack'); <br />
              <span className="const">const</span> <span className="var">TerserPlugin</span> = require('terser-webpack-plugin'); <br />
              <br />
              <span className="const">const</span> <span className="var">isReactRouterDomUsed</span> = (() ={">"} {"{"} <br />
              {"    "}<span className="handler">try</span> {"{"} <br />
              {"       "}require.resolve('react-router-dom'); <br />
              {"       "}return true; <br />
              {"    "}
              {"}"} <span className="handler">catch</span> (error) {"{"} <br />
              {"       "}return false; <br />
              {"    "}
              {"}"} <br />
              {"}"})(); <br /> <br />
              module.exports = (argv) ={">"} {"{"} <br />
              {"   "}<span className="const">const</span> <span className="var">isProduction </span> = argv.mode === 'production'; <br />
              {"   "}<span className="const">const</span> <span className="var">publicPath </span> = <span className="var">isReactRouterDomUsed</span> ? '/' : ''; <br />{" "}
              <br />
              {"   "}<span className="const">const</span> <span className="var">devServerOptions </span> = {"{"} <br />
              {"      "}port: 4500, <br />
              {"      "}proxy: {"{"} <br />
              {"         "}'/api': {"{"} <br />
              {"             "}target: 'http://localhost:8800', <br />
              {"             "}secure: false, <br />
              {"             "}changeOrigin: true <br />
              {"             "}
              {"}"} <br />
              {"           "}
              {"}"}, <br />
              {"      "}static: {"{"} <br />
              {"          "}directory:path.join(__dirname, 'src'), publicPath{" "}
              {"}"}, <br />
              {"          "}open: true,
              <br />
              {"          "}hot: !isProduction, <br />
              {"          "}liveReload: !isProduction, <br />
              {"          "}historyApiFallback: true, <br />
              {"      "}
              {"}"}; <br /> <br />
              {"   "}return {"{"} <br />
              {"       "}mode: isProduction ? 'production' : 'development',{" "}
              <br />
              {"       "}entry: './src/index.jsx', <br />
              {"       "}output: {"{"} <br />
              {"          "}path: path.resolve(__dirname, 'dist'), <br />
              {"          "}filename: isProduction ?
              'assets/[name].[contenthash].js' : 'assets/[name].js', <br />
              {"          "}chunkFilename: isProduction ?
              'assets/[name].[contenthash].js' : 'assets/[name].js', <br />
              {"          "}publicPath, <br />
              {"       "}
              {"}"}, <br />
              {"       "}target: 'web', <br />
              {"       "}devServer: devServerOptions, <br />
              {"       "}resolve: {"{"} extensions: ['.js', '.jsx', '.json']{" "}
              {"}"}, <br />
              {"       "}module: {"{"} <br />
              {"         "}rules: [ <br />
              {"            "}
              {"{"} test: /\.(js|jsx)$/, exclude: /node_modules/, use: {"{"}{" "}
              loader: 'esbuild-loader', options: {"{"} loader: 'jsx', target:
              'es2015', minify: isProduction {"}"} {"}"} {"}"}, <br />
              {"            "}
              {"{"} test: /\.(c|sa|sc)ss$/, exclude: /\.module\.(c|sa|sc)ss$/,
              use: ['style-loader', {"{"} loader: 'css-loader', options: {"{"}{" "}
              importLoaders: 1 {"}"} {"}"}, 'sass-loader', 'esbuild-loader']{" "}
              {"}"}, <br />
              {"            "}
              {"{"} test: /\.module\.(c|sa|sc)ss$/, use: ['style-loader', {"{"}{" "}
              loader: 'css-loader', options: {"{"} modules: true {"}"} {"}"},
              'sass-loader', 'esbuild-loader'] {"}"}, <br />
              {"            "}
              {"{"} test: /\.(png|jpe?g|gif|svg|webp)$/i, type:
              'asset/resource', generator: {"{"} filename:
              'images/[name].[contenthash][ext]' {"}"} {"}"}, <br />
              {"            "}
              {"{"} test: /\.(mp4|webm|ogg|ogv)$/i, type: 'asset/resource',
              generator: {"{"} filename: 'videos/[name].[contenthash][ext]'{" "}
              {"}"} {"}"}, <br />
              {"          "}], <br />
              {"       "}
              {"}"}, <br />
              {"       "}plugins: [ <br />
              {"          "}new HtmlWebpackPlugin({"{"} template: 'index.html'{" "}
              {"}"}), <br />
              {"          "}new webpack.ProvidePlugin({"{"} React: 'react',
              ReactDOM: 'react-dom' {"}"}), <br />
              {"          "}new CopyWebpackPlugin({"{"} patterns: [{"{"} from:
              'src/images', to: 'images' {"}"}, {"{"} from: 'src/videos', to:
              'videos' {"}"}] {"}"}), <br />
              {"          "}new Dotenv(), <br />
              {"       "}], <br />
              {"       "}optimization: {"{"} <br />
              {"          "}minimize: isProduction, <br />
              {"          "}minimizer: [new TerserPlugin({"{"} terserOptions:{" "}
              {"{"} compress: {"{"} drop_console: isProduction {"}"} {"}"} {"}"}
              )], <br />
              {"          "}splitChunks: {"{"} chunks: 'all', minSize: 250,
              cacheGroups: {"{"} defaultVendors: {"{"} test:
              /[\\/]node_modules[\\/]/, priority: -10 {"}"}, default: {"{"}{" "}
              minChunks: 2, priority: -20, reuseExistingChunk: true {"}"} {"}"}{" "}
              {"}"}, <br />
              {"       "}
              {"}"}, <br />
              {"       "}performance: {"{"} hints: isProduction ? 'warning' :
              false, maxAssetSize: 450 * 1024, maxEntrypointSize: 450 * 1024{" "}
              {"}"}, <br />
              {"       "}cache: {"{"} type: 'filesystem' {"}"}, <br />
              {"       "}stats: 'errors-warnings', <br />
              {"       "}devtool: isProduction ? 'source-map' :
              'eval-source-map', <br />
              {"       "}
              {"}"}; <br />
            </pre>
          </div>
        </div>
        <h4>Setup Source Folder</h4>
        <p>this folder contains all the files and directory you need.</p>
        <div className="cli">
          <p>directory</p>
          <div className="terminal">
            <div className="folders">
              <div>
                <i className="fa-regular fa-folder-open"></i> src
                <div>
                  <pre>
                    {"    -> "}
                    <i className="fa-regular fa-folder-open"></i> images <br />
                    {"    -> "}
                    <i className="fa-regular fa-folder-open"></i> videos <br />
                    {"    -> "}
                    <i className="fa-regular fa-folder-open"></i> components <br />
                    {"    -> "}
                    <i className="fa-brands fa-react"></i> index.jsx <br />
                    {"    -> "}
                    <i className="fa-brands fa-react"></i> Start.jsx / App.jsx{" "}
                    <br />
                  </pre>{" "}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4><i className="fa-brands fa-html5"></i> index.html</h4>
        <div className="cli">
          <p>
            {" "}
            <i className="fa-brands fa-html5"></i> index.html
          </p>
          <div className="terminal">
            <pre>
              {"<"}!DOCTYPE html{">"} <br />
              {" "}{"<"}html lang="en"{">"} <br />
              {"  "}{"<"}head{">"} <br />
              {"   "}{"<"}meta charset="UTF-8"{">"} <br />
              {"   "}{"<"}meta name="viewport" content="width=device-width,
              initial-scale=1.0"{">"} <br />
              {"   "}{"<"}meta name="description" content="React 18"{">"} <br />
              {"   "}{"<"}meta http-equiv="Cache-Control" content="no-cache, no-store,
              must-revalidate"{">"} <br />
              {"   "}{"<"}link rel="icon" type="image/x-icon" href="images/React.png"
              {">"} <br />
              {"   "}{"<"}link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
              integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
              crossorigin="anonymous" referrerpolicy="no-referrer" /{">"} <br />
              {"   "}{"<"}title{">"}React + Webpack{"<"}/title{">"} <br />
              {"  "}{"<"}/head{">"} <br />
              {"  "}{"<"}body{">"} <br />
              {"   "}{"<"}div id="root"{">"}
              {"<"}/div{">"} <br />
              {"   "}{"<"}/body{">"} <br />
              {"<"}/html{">"}
            </pre>
          </div>
        </div>
        <h4><i className="fa-brands fa-react"></i> Index.jsx</h4>
        <p>Entry Point of all components</p>
        <div className="cli">
          <p>
            <i className="fa-brands fa-react"></i> index.jsx
          </p>
          <div className="terminal">
            <pre>
              import React from "react"; <br />
              import ReactDOM from "react-dom/client"; <br />
              import "./assets/css/index.css"; <br />
              const Start = React.lazy(()={">"}import('./start')) <br />
              <br />
              const DOM = ReactDOM.createRoot(document.getElementById("root"));{" "}
              <br />
              {"   "}DOM.render{"("} <br />
              {"     "}
              {"<"}React.StrictMode{">"} <br />
              {"        "}
              {"<"}React.Suspense fallback={"{"}
              {"}"}
              {">"} <br />
              {"            "}
              {"<"}Start /{">"} <br />
              {"        "}
              {"<"}/React.Suspense{">"} <br />
              {"     "}
              {"<"}/React.StrictMode{">"}
              {")"} <br />
              <br />
              // React Webpack 5.88.2 Fallbacks and Lazy load
            </pre>
          </div>
        </div>
        <h4><i className="fa-brands fa-react"></i> Start.jsx / App.jsx</h4>
        <p>Main root of all components</p>
        <div className="cli">
          <p>
            <i className="fa-brands fa-react"></i> Start.jsx
          </p>
          <div className="terminal">
            <pre>
              export default function Start{"()"}
              {"{"} <br /> <br /> return {"("} <br />
              {"   "}
              {"<"}div{">"} <br />
              {"      "}
              {"<"}h1{">"}Hello React + Webpack{"</"}h1{">"} <br />
              {"   "}
              {"<"}/div{">"} <br /> {")"} <br />
              {"}"}
            </pre>
          </div>
        </div>
        <h4><i className="fa-brands fa-node-js"></i> Package.json</h4>
        <p>Add these scripts</p>
        <div className="cli">
              <p><i className="fa-brands fa-node-js"></i> package.json</p>
              <div className="terminal">
                <pre>
                "scripts": {"{"} <br />
                {"  "}"start": "webpack-dev-server --mode development --config webpack.config.js", <br />
                {"  "}"build": "webpack --mode production --config webpack.config.js", <br />
                    {"}"},
                </pre>
              </div>
            </div>
        <p>Output</p>
        <div className="cli">
          <p>
            <i className="fa-brands fa-firefox-browser"></i> Browser
          </p>
          <div className="terminal browser">
            <h1>Hello React</h1>
          </div>
        </div>
        <h4>Full React Template</h4>
        <div className="cli">
          <p>directory</p>
          <div className="terminal">
            <div className="folders">
              <div>
                <i className="fa-regular fa-folder-open"></i> src
                <div>
                  <pre>
                    {"    -> "}
                    <i className="fa-regular fa-folder-open"></i> assets <br />
                    {"  "}
                    {"    -> "}
                    <i className="fa-brands fa-css3"></i> index.css <br />
                    {"    -> "}
                    <i className="fa-regular fa-folder-open"></i> images <br />
                    {"    -> "}
                    <i className="fa-regular fa-folder-open"></i> videos <br />
                    {"    -> "}
                    <i className="fa-regular fa-folder-open"></i> components <br />
                    {"    -> "}
                    <i className="fa-brands fa-react"></i> index.jsx <br />
                    {"    -> "}
                    <i className="fa-brands fa-react"></i> Start.jsx / App.jsx{" "}
                    <br />
                  </pre>{" "}
                  <br />
                </div>
                <div className="icon-webpack">
                  <div className="icon">
                    <img src={WebpackImg} alt="webpack" />
                  </div>
                  <pre>webpack.config.js </pre>
                </div>
                <pre>
                  {" "}
                  <i className="fa-brands fa-node-js"></i> package.json
                </pre>
              </div>
            </div>
          </div>
        </div>
        <p>Congratulations you've finally made your first react app.</p>
      </div>
    </div>
  );
}
