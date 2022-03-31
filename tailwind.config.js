const { url } = require("inspector");

module.exports = {
    content: [
            "./components//*.{js,vue,ts}",
            "./layouts//.vue",
            "./pages/**/.vue",
            "./plugins/*/.{js,ts}",
            "./nuxt.config.{js,ts}",
        ],
        theme: {
            extend: {
                colors: {
                    'my-color': '#968b747e',
                    'comment-color':  '#D3D3D3',
                  },
                  backgroundImage:{
                      'piano': "url('@/assets/Piano.png')"
                  },
                  
            },
        },
        plugins: [],
    }