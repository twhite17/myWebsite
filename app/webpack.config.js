
const path = require("path");


module.exports = {
    context: path.resolve(__dirname),
    entry: "./index.jsx",
    output: {
        path : path.resolve(__dirname, "dist"),
        filename : "bundle.js"
    },

    module : {
        rules : [
            {
                test:/\.(js|jsx)$/,
                include : path.resolve(__dirname, "/"),
                exclude: /node_modules/,
                use:{
                    loader : "babel-loader"
                }
            }
        ]
    }
}