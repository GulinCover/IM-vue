module.exports = {
    "devServer": {
        port: 9999,
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