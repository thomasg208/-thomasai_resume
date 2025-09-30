/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Neon Mode Colors - Optimized for readability
        dark: {
          base: '#0F1419',        // Slightly lighter than pure black (better for eyes)
          surface: '#1A1F2E',     // Improved surface color
          elevated: '#232937',    // Better elevated surface
          border: '#3A4252',      // More visible borders
          text: {
            primary: '#F0F4F8',   // Off-white (less harsh than pure white)
            secondary: '#A8B2C1',  // Better contrast for secondary text
            accent: '#00D9FF'     // Slightly brighter accent
          },
          neon: {
            blue: '#00D9FF',      // Brighter neon blue
            purple: '#B366FF',    // Brighter neon purple
            cyan: '#00FFE1',      // Brighter neon cyan
            pink: '#FF4D9A'       // Brighter neon pink
          },
          glow: {
            blue: 'rgba(0, 217, 255, 0.4)',    // Stronger glow
            purple: 'rgba(179, 102, 255, 0.4)', // Stronger glow
            cyan: 'rgba(0, 255, 225, 0.4)'      // Stronger glow
          }
        },
        // Light Mode Colors
        light: {
          base: '#f8fafc',
          surface: '#ffffff',
          elevated: '#f1f5f9',
          border: '#e2e8f0',
          text: {
            primary: '#1e293b',
            secondary: '#64748b',
            accent: '#0ea5e9'
          },
          metallic: {
            silver: '#94a3b8',
            platinum: '#cbd5e1',
            steel: '#475569'
          },
          subtle: {
            blue: '#dbeafe',
            purple: '#ede9fe',
            cyan: '#cffafe'
          }
        }
      },
      fontFamily: {
        'tactical': ['Exo', 'Eurostile', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'neon-flicker': 'neon-flicker 1.5s ease-in-out infinite alternate',
        'tactical-scan': 'tactical-scan 3s linear infinite'
      },
      keyframes: {
        'glow-pulse': {
          '0%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            transform: 'scale(1.02)'
          }
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-down': {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'neon-flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        'tactical-scan': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        }
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #ec4899 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)',
        'gradient-light': 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
        'tactical-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)'
      },
      backdropBlur: {
        'tactical': '12px'
      }
    },
  },
  plugins: [],
}
