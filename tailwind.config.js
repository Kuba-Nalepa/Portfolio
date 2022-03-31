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
                  },
                  backgroundImage:{
                      'piano': "url('@/assets/Piano.png')"
                  },
                  height: {
                      'my-height':'1500px'
                  },
                  
            },
        },
        plugins: [],
    }