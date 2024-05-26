// they don't export AstroComponentFactory
// import type { AstroComponentFactory } from 'astro/container'

// HACK: dirty workaround to get the AstroComponentFactory type
import type { experimental_AstroContainer } from 'astro/container'
type AstroComponentFactory = Parameters<
	experimental_AstroContainer['renderToResponse']
>[0]

import type { WebRenderer } from '@storybook/types'

export type {
	RenderContext,
	StoryContext,
} from '@storybook/types'

export interface AstroRenderer extends WebRenderer {
	component: AstroComponentFactory
	storyResult: StoryFnAstroReturnType
}

export interface ShowErrorArgs {
	title: string
	description: string
}

export type StoryFnAstroReturnType = Promise<string>
