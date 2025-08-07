/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* burgundy-opacity */
        input: 'var(--color-input)', /* soft-cream */
        ring: 'var(--color-ring)', /* deep-burgundy */
        background: 'var(--color-background)', /* warm-white */
        foreground: 'var(--color-foreground)', /* rich-dark */
        primary: {
          DEFAULT: 'var(--color-primary)', /* deep-burgundy */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* rose-gold */
          foreground: 'var(--color-secondary-foreground)', /* rich-dark */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* sienna-brown */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* soft-cream */
          foreground: 'var(--color-muted-foreground)', /* muted-burgundy */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* champagne */
          foreground: 'var(--color-accent-foreground)', /* rich-dark */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)', /* rich-dark */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)', /* rich-dark */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* sage-green */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* warm-amber */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* sienna-brown */
          foreground: 'var(--color-error-foreground)', /* white */
        },
        whatsapp: {
          DEFAULT: 'var(--color-whatsapp)', /* whatsapp-green */
          foreground: 'var(--color-whatsapp-foreground)', /* white */
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], /* 48px */
        'display': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], /* 36px */
        'heading': ['1.875rem', { lineHeight: '1.4' }], /* 30px */
        'subheading': ['1.125rem', { lineHeight: '1.5' }], /* 18px */
      },
      spacing: {
        '18': '4.5rem', /* 72px */
        '22': '5.5rem', /* 88px */
        '26': '6.5rem', /* 104px */
        '30': '7.5rem', /* 120px */
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'primary': 'var(--shadow-primary)',
        'elevation': 'var(--shadow-elevation)',
        'whatsapp': '0 4px 16px rgba(37, 211, 102, 0.3)',
      },
      animation: {
        'whatsapp-pulse': 'whatsapp-pulse 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'whatsapp-pulse': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '16/10': '16 / 10',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}