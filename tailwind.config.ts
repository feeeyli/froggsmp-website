import type { Config } from "tailwindcss";
import { fontSize } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		shineOpacity: {
			15: "15%",
			35: "35%",
			55: "55%",
			75: "75%",
			95: "95%",
		},
		shineColor: {
			primary: "147, 47%, 64%",
		},
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: {
					DEFAULT: "hsl(var(--input))",
					shadow: "hsl(var(--input-shadow))",
				},
				ring: "hsl(var(--ring))",
				"m-dark-background": "hsl(var(--m-dark-background))",
				"m-light-background": "hsl(var(--m-light-background))",
				"m-dark-shadow": "hsl(var(--m-dark-shadow))",
				"m-light-shadow": "hsl(var(--m-light-shadow))",
				"m-destructive-shadow": "hsl(var(--m-destructive-shadow))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				minecraft: ["var(--font-minecraft)"],
				emoji: ["var(--font-emoji)"],
			},
			fontSize: {
				xs: fontSize.lg,
				sm: fontSize.xl,
				base: fontSize["2xl"],
				lg: fontSize["3xl"],
				xl: fontSize["4xl"],
				"2xl": fontSize["5xl"],
				"3xl": fontSize["6xl"],
				"4xl": fontSize["7xl"],
				"5xl": fontSize["8xl"],
				"6xl": fontSize["9xl"],
			},
			animationDelay: {
				"50": "50ms",
				"250": "250ms",
				"400": "400ms",
			},
			transitionTimingFunction: {
				"out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
			},
			keyframes: {
				enter: {
					from: {
						opacity: "var(--tw-enter-opacity, 1)",
						transform:
							"translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))",
					},
					to: {
						opacity: "initial",
						transform: "initial",
					},
				},
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("tailwind-scrollbar")({
			nocompatible: true,
			preferredStrategy: "pseudoelements",
		}),
		plugin(({ matchUtilities, addUtilities, theme }) => {
			addUtilities({
				".shine": {
					"--tw-shine-opacity": "35%",
					"--tw-shine-color": "255, 100%, 100%",
					backgroundImage: [
						"linear-gradient(to right, hsl(var(--tw-shine-color), var(--tw-shine-opacity)) 2px,transparent 0px)",
						"linear-gradient(to bottom, hsl(var(--tw-shine-color), var(--tw-shine-opacity)) 2px,transparent 0px)",
						"linear-gradient(to left, hsl(var(--tw-shine-color), calc(var(--tw-shine-opacity) - 20%)) 2px,transparent 0px)",
						"linear-gradient(to top, hsl(var(--tw-shine-color), calc(var(--tw-shine-opacity) - 20%)) 2px,transparent 0px)",
					].join(", "),
				},
				".shine-large": {
					"--tw-shine-opacity": "35%",
					"--tw-shine-color": "255, 100%, 100%",
					backgroundImage: [
						"linear-gradient(to right, hsl(var(--tw-shine-color), var(--tw-shine-opacity)) 4px,transparent 0px)",
						"linear-gradient(to bottom, hsl(var(--tw-shine-color), var(--tw-shine-opacity)) 4px,transparent 0px)",
						"linear-gradient(to left, hsl(var(--tw-shine-color), calc(var(--tw-shine-opacity) - 20%)) 4px,transparent 0px)",
						"linear-gradient(to top, hsl(var(--tw-shine-color), calc(var(--tw-shine-opacity) - 20%)) 4px,transparent 0px)",
					].join(", "),
				},
				".shine-dual": {
					"--tw-shine-opacity": "35%",
					backgroundImage: [
						"linear-gradient(to right, hsl(255, 100%, 100%, var(--tw-shine-opacity)) 2px,transparent 0px)",
						"linear-gradient(to bottom, hsl(255, 100%, 100%, var(--tw-shine-opacity)) 2px,transparent 0px)",
						"linear-gradient(to left, hsl(255, 100%, 0%, var(--tw-shine-opacity)) 2px,transparent 0px)",
						"linear-gradient(to top, hsl(255, 100%, 0%, var(--tw-shine-opacity)) 2px,transparent 0px)",
					].join(", "),
				},
			});
			matchUtilities(
				{
					shine: (value) => ({
						"--tw-shine-opacity": value,
					}),
				},
				{
					values: theme("shineOpacity"),
				},
			);
			matchUtilities(
				{
					shine: (value) => ({
						"--tw-shine-color": value,
					}),
				},
				{
					values: theme("shineColor"),
				},
			);
		}),
	],
} satisfies Config;
