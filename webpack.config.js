const path = require('path');
const js_regex = /\.(js)&/;

function importAll(r) {
    r.keys().forEach(r);
}


module.exports = {
    context: path.join(__dirname, './app'),
    entry: importAll(require.context('./src/javascript/', true, /\.js$/)),
    output: {
        filename: 'ml.bundle.prod.js',
        path: path.resolve(__dirname, './app/dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                'file-loader'
            ]
        }]
    }
};