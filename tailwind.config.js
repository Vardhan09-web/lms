/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	  "./src/**/*.{js,ts,jsx,tsx}", 
	],
	theme: {
    	colors: {
    		transparent: 'transparent',
    		current: 'currentColor',
    		white: '#ffffff',
    		black: '#000000',
    		purple: '#611F69',
    		lightgrey: '#8C8C8C',
    		green: '#6B9F36',
    		lightpink: '#FCF6EF',
    		orange: '#F9CD92',
    		grey500: '#ECECEC',
    		bgpink: '#FCF5EF',
    		bgpurple: '#451F49',
    		emailbg: '#6a4c6d',
    		offwhite: '#FDFDFD',
    		offblack: '#333333',
			Orange: '#F36C50',
			lightBlue: '#29AEFC',
			black: '#000000',
    		red: '#FF605C'
    	},
    	fontFamily: {
    		inter: ['Inter', 'sans-serif']
    	},
    	fontSize: {
    		xs: ['0.75rem', { lineHeight: '1rem' }],
    		sm: ['0.875rem', { lineHeight: '1.25rem' }],
    		base: ['1rem', { lineHeight: '1.5rem' }],
    		lg: ['1.125rem', { lineHeight: '1.75rem' }],
    		xl: ['1.25rem', { lineHeight: '1.75rem' }],
    		'2xl': ['1.5rem', { lineHeight: '2rem' }],
    		'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    		'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    		'5xl': ['3rem', { lineHeight: '1' }],
    		'6xl': ['3.75rem', { lineHeight: '1' }],
    		'7xl': ['4.5rem', { lineHeight: '1' }],
    		'8xl': ['6rem', { lineHeight: '1' }],
    		'9xl': ['8rem', { lineHeight: '1' }],
    		'15px': ['15px', { lineHeight: '1' }],
    		'75px': ['75px', { lineHeight: '1' }]
    	},
    	extend: {
    		spacing: {
    			'340px': '340px'
    		},
    		width: {
    			auto: 'auto',
    			'1/2': '50%',
    			'1/3': '33.333333%',
    			'2/3': '66.666667%',
    			'1/4': '25%',
    			'2/4': '50%',
    			'3/4': '75%',
    			'1/5': '20%',
    			'2/5': '40%',
    			'3/5': '60%',
    			'4/5': '80%',
    			'1/6': '16.666667%',
    			'2/6': '33.333333%',
    			'3/6': '50%',
    			'4/6': '66.666667%',
    			'5/6': '83.333333%',
    			'1/12': '8.333333%',
    			'2/12': '16.666667%',
    			'3/12': '25%',
    			'4/12': '33.333333%',
    			'5/12': '41.666667%',
    			'6/12': '50%',
    			'7/12': '58.333333%',
    			'8/12': '66.666667%',
    			'9/12': '75%',
    			'10/12': '83.333333%',
    			'11/12': '91.666667%',
    			full: '100%',
    			screen: '100vw',
    			min: 'min-content',
    			max: 'max-content',
    			fit: 'fit-content'
    		},
    		lineHeight: {
    			'4px': '85px'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
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
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
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
    		keyframes: {
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			}
    		},
    		animation: {
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
  };
  