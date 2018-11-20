module.exports = {
    "presets": [
        [
            "@babel/preset-env", 
            { 
                // "modules": false 
            }
        ]
    ],
    "env": {
        "development": {
            "sourceMaps": "inline"
        },
        "test": {
            "retainLines": true,
            "sourceMaps": "both"
        }
    }
};