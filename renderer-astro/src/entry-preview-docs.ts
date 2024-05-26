import type {
	ArgTypesEnhancer,
	DecoratorFunction,
} from '@storybook/types'
import {
	SourceType,
	enhanceArgTypes,
} from '@storybook/docs-tools'

import type { AstroRenderer } from './types'

export const decorators: DecoratorFunction<AstroRenderer>[] =
	[]

export const parameters = {
	docs: {
		story: { inline: true },
		source: {
			type: SourceType.DYNAMIC,
			language: 'astro',
			code: undefined,
			excludeDecorators: undefined,
		},
	},
}

export const argTypesEnhancers: ArgTypesEnhancer[] = [
	enhanceArgTypes,
]
