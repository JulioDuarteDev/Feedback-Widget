module.exports = {
  content: ["./src/**/*tsx"],
  darkMode: 'class',  
  theme: {
    extend: {
      colors: {
        brand:{
          hover:'#996DFF',
          500: '#8257E5',
          text: '#FFFFFF'
        },
        dark: {
          surface_primary:'#18181b',
          surface_secondary:'#27272a',
          surface_secondary_hover:'#3f3f46',
          stroke: '#52525b',
          tooltip:'#f4f4f5',
          text_primary:'#f4f4f5',
          text_secondary:'#a1a1aa',
          text_on_tooltip:'#27272a',
          bg: '#09090A'
        },
        light: {
          surface_primary:'#FFFFFF',
          surface_secondary:'#f4f4f5',
          surface_secondary_hover:'#e4e4e7',
          stroke: '#d4d4d8',
          tooltip:'#27272a',
          text_primary:'#27272a',
          text_secondary:'#71717a',
          text_on_tooltip:'#f4f4f5',
          bg: '#E5E5E5'
        }

        
      },
      borderRadius:{
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
