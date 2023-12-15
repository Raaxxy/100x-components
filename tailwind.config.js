/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        
        "Neutral-1000":"#000000",
        "Neutral-950":"#0A0A0A",
        "Neutral-900":"#171717",
        "Neutral-800":"#262626",
        "Neutral-700":"#404040",
        "Neutral-600":"#525252",
        "Neutral-500":"#737373",
        "Neutral-400":"#A2A2A2",
        "Neutral-300":"#D3D3D3",
        "Neutral-200":"#E4E4E4",
        "Neutral-100":"#F4F4F4",
        "Neutral-50": "#F9F9F9",
        "gray":"rgba(255,255,255,0.12)",
        "twitter-blue-default":"#1D9BF0",
        "twitter-blue-hover":"#1871CA",
        "twitter-blue-disabled":"#1E5D87",
        "twitter-white-100": "#FFF",
        "blue-wash":"rgba(117,190,239,0.2)",
        "button-stroke": "#546A7A",
        "searchbar-fill":"#212327",
        "card-fill":"#16181C",
        "green-success":"#00BE74",
        "red-error":"#8B141A",
       
      },
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      },
      borderRadius: {
        "border-radius-65": "65px",
        "border-radius-30": "30px",
        "border-radius-9999": "9999px",
        "border-radius-4": "4px"
      },
      boxShadow: {
        'button': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      backdropBlur: {
        "23": "blur(23.668209075927734px)"
      },
      width: {
        "334": "334px",
        "348": "348px",
        "442": "442px",
        "426": "426px",
        "482": "482px",
        "434": "434px",
      },
      height: {
        "39": "39px"
      },
      lineHeight: {
        "normal": "normal"
      },
      borderColor: {
        'border-stroke': 'var(--stroke, rgba(29, 155, 240, 0.24))',
      }

    },
    
  },
  plugins: [],
};