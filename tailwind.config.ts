import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				script: ['var(--font-script)', 'cursive'],
			},
			colors: {
				primary: {
					50: '#faf7fb',
					100: '#f4eef6',
					200: '#e9ddec',
					300: '#d8c2dd',
					400: '#c19bc8',
					500: '#a975b1',
					600: '#925a9a',
					700: '#7a4a80',
					800: '#5a2662',
					900: '#4a1f52',
				},
			},
			keyframes: {
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' },
				},
				kenburns: {
					from: { transform: 'scale(1.15)' },
					to: { transform: 'scale(1)' },
				},
				rise: {
					from: { transform: 'translateY(110%)' },
					to: { transform: 'translateY(0)' },
				},
				fadeUp: {
					from: { opacity: '0', transform: 'translateY(24px)' },
					to: { opacity: '1', transform: 'translateY(0)' },
				},
				progress: {
					from: { transform: 'scaleX(0)' },
					to: { transform: 'scaleX(1)' },
				},
				spinSlow: {
					to: { transform: 'rotate(360deg)' },
				},
				pop: {
					'0%': { transform: 'scale(1)' },
					'40%': { transform: 'scale(1.35)' },
					'100%': { transform: 'scale(1)' },
				},
				bloom: {
					'0%, 100%': { transform: 'scale(0.9) rotate(0deg)', opacity: '0.55' },
					'50%': { transform: 'scale(1.05) rotate(180deg)', opacity: '1' },
				},
			},
			animation: {
				marquee: 'marquee 30s linear infinite',
				'marquee-slow': 'marquee 55s linear infinite',
				kenburns: 'kenburns 6s cubic-bezier(.2,.7,.2,1) forwards',
				rise: 'rise 1s cubic-bezier(.2,.8,.2,1) both',
				fadeUp: 'fadeUp .9s cubic-bezier(.2,.8,.2,1) both',
				progress: 'progress linear forwards',
				'spin-slow': 'spinSlow 18s linear infinite',
				pop: 'pop .45s ease-out',
				bloom: 'bloom 2.4s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
export default config
