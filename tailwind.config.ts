/** @type {import('tailwindcss').Config} */

const coreColors = {
  transparent: 'transparent',
  white: {
    100: 'rgba(255, 255, 255, 1)',
    80: 'rgba(255, 255, 255, 0.8)',
    50: 'rgba(255, 255, 255, 0.5)',
    30: 'rgba(255, 255, 255, 0.3)',
  },
  black: {
    100: 'rgba(0, 0, 0, 1)',
    80: 'rgba(0, 0, 0, 0.8)',
    50: 'rgba(0, 0, 0, 0.5)',
    30: 'rgba(0, 0, 0, 0.3)',
  },
  grey: {
    950: '#0e0e0e',
    900: '#121212',
    800: '#181818',
    700: '#242424',
    600: '#363636',
    500: '#3a3a3a',
    400: '#4d4d4d',
    350: '#d0d0d0',
    300: '#d6d6d6',
    200: '#ebebeb',
    100: '#f5f5f5',
    50: '#fafafa',
  },
  amaranth: {
    900: '#180508',
    800: '#3b0e15',
    700: '#761b2a',
    600: '#d4314c',
    500: '#ec3654',
    400: '#ee4a65',
    300: '#f59aa9',
    200: '#facdd4',
    100: '#fdebee',
  },
  lightBlue: {
    900: '#02121a',
    800: '#042e40',
    700: '#085c80',
    600: '#0c89bf',
    500: '#10b7ff',
    400: '#4cc9ff',
    300: '#87dbff',
    200: '#c3edff',
    100: '#e7f8ff',
  },
  green: {
    900: '#01130c',
    800: '#03301f',
    700: '#06613e',
    600: '#09915c',
    500: '#0cc17b',
    400: '#49d19c',
    300: '#85e0bd',
    200: '#c2efde',
    100: '#e7f9f2',
  },
  yellow: {
    900: '#191101',
    800: '#3e2a01',
    700: '#7b5403',
    600: '#b87e04',
    500: '#f6a805',
    400: '#f8be44',
    300: '#fbd382',
    200: '#fde9c0',
    100: '#fef6e6',
  },
  red: {
    900: '#180607',
    800: '#3b1011',
    700: '#762023',
    600: '#b02f34',
    500: '#eb3f45',
    400: '#f06f74',
    300: '#f59fa2',
    200: '#facfd0',
    100: '#fdecec',
  },
  plume: {
    900: '#0e030c',
    800: '#24071f',
    700: '#480e3e',
    600: '#721662',
    500: '#8f1c7b',
    400: '#a44794',
    300: '#c78dbd',
    200: '#e3c6de',
    100: '#f4e8f2',
  },
  shamrock: {
    900: '#03140f',
    800: '#083225',
    700: '#106449',
    600: '#199f74',
    500: '#20c792',
    400: '#4ad2a7',
    300: '#8fe3c9',
    200: '#c7f1e4',
    100: '#e9f9f4',
  },
};

export default {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    colors: {
      core: coreColors,
      secondary: {
        liveRed: '#D80C2E',
        blue: '#3d86f6',
        yellow: '#ffb300',
        lightGreen: '#16c900',
        red: '#fd101e',
        lightPurple: '#7f2a8d',
        magenta: '#ff00ff',
        violet: '#6e00ff',
        darkBlue: '#2826c7',
      },
      content: {
        primary: {
          dark: 'rgba(255,255, 255, 1)',
          light: 'rgba(0, 0, 0, 1)',
        },
        secondary: {
          dark: 'rgba(255,255, 255, 0.8)',
          light: 'rgba(0, 0, 0, 0.8)',
        },
        tertiary: {
          dark: 'rgba(255,255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.5)',
        },
        Disabled: {
          dark: 'rgba(255,255, 255, 0.3)',
          light: 'rgba(0, 0, 0, 0.3)',
        },
        primaryInverted: {
          dark: 'rgba(0, 0, 0, 1)',
          light: 'rgba(255,255, 255, 1)',
        },
        secondaryInverted: {
          dark: 'rgba(0, 0, 0, 0.8)',
          light: 'rgba(255,255, 255, 0.8)',
        },
        tertiaryInverted: {
          dark: 'rgba(0, 0, 0, 0.5)',
          light: 'rgba(255,255, 255, 0.5)',
        },
        disabledInverted: {
          dark: 'rgba(0, 0, 0, 0.3)',
          light: 'rgba(255,255, 255, 0.3)',
        },
        static: {
          dark: 'rgba(0, 0, 0, 1)',
          light: 'rgba(0, 0, 0, 1)',
        },
        staticInverted: {
          dark: 'rgba(255,255, 255, 1)',
          light: 'rgba(255,255, 255, 1)',
        },
        brand: {
          dark: coreColors.amaranth[500],
          light: coreColors.amaranth[500],
        },
        link: {
          dark: coreColors.amaranth[500],
          light: coreColors.amaranth[500],
        },
        linkHover: {
          dark: coreColors.amaranth[400],
          light: coreColors.amaranth[400],
        },
        linkNeutral: {
          dark: coreColors.white[80],
          light: coreColors.black[80],
        },
        linkNeutralHover: {
          dark: coreColors.white[100],
          light: coreColors.black[100],
        },
        info: {
          dark: coreColors.lightBlue[500],
          light: coreColors.lightBlue[500],
        },
        warning: {
          dark: coreColors.yellow[500],
          light: coreColors.yellow[500],
        },
        error: {
          dark: coreColors.red[500],
          light: coreColors.red[500],
        },
        valid: {
          dark: coreColors.green[500],
          light: coreColors.green[500],
        },
      },
      background: {
        brand: {
          dark: coreColors.amaranth[500],
          light: coreColors.amaranth[500],
        },
        brandHover: {
          dark: coreColors.amaranth[400],
          light: coreColors.amaranth[400],
        },
        brandPressed: {
          dark: coreColors.amaranth[600],
          light: coreColors.amaranth[600],
        },
        brandDisabled: {
          dark: coreColors.amaranth[700],
          light: coreColors.amaranth[700],
        },
        secondary: {
          dark: coreColors.grey[700],
          light: coreColors.grey[200],
        },
        secondaryHover: {
          dark: coreColors.grey[600],
          light: coreColors.grey[300],
        },
        secondaryPressed: {
          dark: coreColors.grey[500],
          light: coreColors.grey[400],
        },
        secondaryDisabled: {
          dark: coreColors.grey[800],
          light: coreColors.grey[100],
        },
        secondaryInverted: {
          dark: coreColors.grey[200],
          light: coreColors.grey[700],
        },
        secondaryInvertedHover: {
          dark: coreColors.grey[300],
          light: coreColors.grey[600],
        },
        secondaryInvertedPressed: {
          dark: coreColors.grey[400],
          light: coreColors.grey[500],
        },
        secondaryInvertedDisabled: {
          dark: coreColors.grey[100],
          light: coreColors.grey[800],
        },
        brandSecondary: {
          dark: coreColors.shamrock[500],
          light: coreColors.shamrock[500],
        },
        brandSecondaryHover: {
          dark: coreColors.shamrock[400],
          light: coreColors.shamrock[400],
        },
        brandSecondaryPressed: {
          dark: coreColors.shamrock[600],
          light: coreColors.shamrock[600],
        },
        brandSecondaryDisabled: {
          dark: coreColors.shamrock[700],
          light: coreColors.shamrock[300],
        },
        transparent: {
          dark: 'rgba(36, 36, 36, 0.7)',
          light: 'rgba(214, 214, 214, 1)',
        },
        info: {
          dark: coreColors.lightBlue[500],
          light: coreColors.lightBlue[500],
        },
        infoWeak: {
          dark: coreColors.lightBlue[700],
          light: coreColors.lightBlue[300],
        },
        warning: {
          dark: coreColors.yellow[500],
          light: coreColors.yellow[500],
        },
        warningWeak: {
          dark: coreColors.yellow[700],
          light: coreColors.yellow[300],
        },
        error: {
          dark: coreColors.red[500],
          light: coreColors.red[500],
        },
        errorWeak: {
          dark: coreColors.red[700],
          light: coreColors.red[300],
        },
        valid: {
          dark: coreColors.green[500],
          light: coreColors.green[500],
        },
        validWeak: {
          dark: coreColors.green[700],
          light: coreColors.green[300],
        },
      },
      border: {
        base: {
          dark: coreColors.grey[700],
          light: coreColors.grey[200],
        },
        opaque: {
          dark: coreColors.grey[600],
          light: coreColors.grey[300],
        },
        active: {
          dark: coreColors.amaranth[100],
          light: coreColors.amaranth[900],
        },
        brand: {
          dark: coreColors.amaranth[500],
          light: coreColors.amaranth[500],
        },
        info: {
          dark: coreColors.lightBlue[500],
          light: coreColors.lightBlue[500],
        },
        warning: {
          dark: coreColors.yellow[500],
          light: coreColors.yellow[500],
        },
        error: {
          dark: coreColors.red[500],
          light: coreColors.red[500],
        },
        valid: {
          dark: coreColors.green[500],
          light: coreColors.green[500],
        },
        focus1: {
          dark: coreColors.black[100],
          light: coreColors.white[100],
        },
        focus2: {
          dark: coreColors.white[100],
          light: coreColors.black[100],
        },
      },
    },
    borderRadius: {
      0: 0,
      2: '2px',
      4: '4px',
      8: '8px',
      16: '16px',
      full: '400px',
    },
    borderWidth: {
      none: '0',
      thinner: '1px',
      thin: '1.5px',
      thicker: '2px',
      thickest: '3px',
    },
    spacing: {
      0: '0',
      0.5: '2px',
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
      6: '24px',
      8: '32px',
      10: '40px',
      12: '48px',
      14: '56px',
      15: '60px',
      16: '64px',
      18: '72px',
      20: '80px',
      24: '96px',
    },
    extend: {
      fontFamily: {
        canal25: ["'Canal+25'", 'sans-serif'],
        hind: ['"Hind"', 'sans-serif'],
      },
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
  },

  plugins: [],
};
