module.exports = {
    entry: './src/app.js',
    module: {
        rules: [
            { test: /.js$/, use: 'babel-loader' }
        ]
    },
    devtool: 'source-map',
    devServer: {
        proxy: {
            '/graphql': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
            }
        }
    }
}