import type { StorybookConfig } from '@storybook/astro-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-essentials'],
	framework: {
		name: '@storybook/astro-vite',
		options: {},
	},
}
export default config
