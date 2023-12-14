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
        "twitter blue-default":"#1D9BF0",
        "twitter blue-hover":"#1871CA",
        "twitter blue-disabled":"#1E5D87",
        "twitter-white-100": "#FFF",
        "blue-wash":"rgba(117,190,239,0.2)",
        "button stroke": "#546A7A",
        "searchbar-fill":"#212327",
        "card-fill":"#16181C",
        "green-success":"#00BE74",
        "red-error":"#8B141A",
       
      },
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      },
      borderRadius: {
        'button-l': "30px",
        'button-xl': "65px",
      },
      boxShadow: {
        'button': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      spacing:{
        0.25:'1px',
        1.25:'5px',
        4.5:'18px',
        16.5:'66px',
        23.5:'93px',
        35.75:'143px',
        39:'156px',
        43:'172px',
        50:'200px',
        58.25:'233px',
        87:'348px',
        88.75:'355px',
        98.5:'394px',
        100.5:'402px',
        106.5:'426px',
        108.5:'434px',
        120.5:'482px',
        128:'512px',
        148.25:'593px',
        150:'600px',
      }
    },
    
  },
  corePlugins:{
    preflight: false,
  },
};