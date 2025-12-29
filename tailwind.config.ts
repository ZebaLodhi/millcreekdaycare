import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				light: '#5B6EB3',
  				dark: '#3A5A8A',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				light: '#6BC5CF',
  				dark: '#3ABAB5',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				light: '#A5E8EF',
  				dark: '#6BC5CF',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			pink: {
  				DEFAULT: '#EED7F0',
  				light: '#F5E8F7',
  				dark: '#D4B8D7'
  			},
  			cream: {
  				DEFAULT: '#FFF4E8',
  				light: '#FFF9F0',
  				dark: '#FFE8D6'
  			},
  			navy: {
  				DEFAULT: '#4877AD',
  				light: '#5B8BC4',
  				dark: '#3A5A8A'
  			},
  			yellow: {
  				DEFAULT: '#F7D154',
  				light: '#F9DC7A',
  				dark: '#E5BF42'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			fredoka: [
  				'var(--font-fredoka)'
  			],
  			railey: [
  				'var(--font-railey)'
  			],
  			sans: [
  				'var(--font-fredoka)',
  				'system-ui',
  				'sans-serif'
  			],
  			display: [
  				'var(--font-fredoka)',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			xl: '1rem',
  			'2xl': '1.5rem',
  			'3xl': '2rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			soft: '0 2px 15px -3px rgba(72, 119, 173, 0.08), 0 10px 20px -2px rgba(72, 119, 173, 0.04)',
  			'soft-lg': '0 10px 40px -10px rgba(72, 119, 173, 0.15)',
  			'soft-xl': '0 8px 24px rgba(72, 119, 173, 0.15)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },

  plugins: [require("tailwindcss-animate")],
};

export default config;


