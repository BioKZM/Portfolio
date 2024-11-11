/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 4s infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical" : "marquee-veritcal var(--duration) linear infinite"
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
        "border-beam":
        {
          "100%" : {
            "offset-distance" : "100%",
          }
        },
        marquee : {
          from : { transform : "translateX(0)"},
          to: { transform : "translateX(calc(-100% - var(--gap)))"},
        },
        "marquee-vertical" : {
          from : { transform : "translateY(0)"},
          to : { transform : "translateY(calc(-100% - var(--gap)))"},
        }
      },
    },
    
  },
  plugins: [],

}

