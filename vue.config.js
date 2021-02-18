module.exports = {
    "devServer": {
        port: 80,
        "proxy": {
            "/api": {
                "target": "http://127.0.0.1",
                "pathRewrite": {
                    "^/api": ""
                }
            }
        }
    },

}