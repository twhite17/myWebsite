
const path = require("path");


module.exports = {
    context: path.resolve(__dirname),
    entry: "./index.jsx",

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