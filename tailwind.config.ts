import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    presets: [
      // Manage Tailwind Typography's configuration in a separate file.
      require("./tailwind-typography.config.ts"),
    ],
    theme: {
      // Extend the default theme.
      extend: {
        colors: {
          bg: "#bfbfbf",
          content: "#bfbfbf",
          footer: "#3a3a3a",
          text1: "#fcf7e3",
          correct: "#47A541",
          invalid: "#E53E3E",
          error: "#b32424",
          graybg: "#f7f5f5",
          grayborder: "#d7d7d7",
          btn:{
            base: "#d696bc",
            darker: "#803261",
          },
          btn2:{
            base: "#c8c3a1",
            darker: "#a9a38a",
          },
        },
        boxShadow: {}
      },
    },
  }