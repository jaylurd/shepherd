tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#fcfaf6', // Cream background
        surface: '#ffffff',
        'surface-elevated': '#ffffff',
        'surface-highlight': '#f5f1e8',
        
        primary: '#6b5e1b', // Olive / Brown
        'primary-hover': '#5c5117',
        
        secondary: '#d4b856', // Gold/Mustard
        'secondary-hover': '#c2a74c',
        
        accent: '#7c6b25', // Dark Gold
        
        'text-primary': '#1a1916', // Dark Charcoal
        'text-secondary': '#66635c', // Lighter Slate/Brown
        'text-tertiary': '#8f8b80',
        
        border: '#e8e4d8', 
        
        'dark-card': '#302e28',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        full: '9999px',
      },
      fontFamily: {
        display: ['Hanken Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
};
