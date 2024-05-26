import { experimental_AstroContainer } from 'astro/container'
import type {
	ArgsStoryFn,
	RenderContext,
} from '@storybook/types'
import { simulatePageLoad } from '@storybook/preview-api'
import type { AstroRenderer } from './types'

export const render: ArgsStoryFn<AstroRenderer> = async (
	_args,
	context,
) => {
	const { id, component: Component } = context
	if (!Component) {
		throw new Error(
			`Unable to render story ${id} as the component annotation is missing from the default export`,
		)
	}

	const container =
		await experimental_AstroContainer.create()

	return await container.renderToString(Component, {
		// TODO: support props
		// props: _args,
	})
}

export const renderToCanvas = async (
	{ storyFn, showMain }: RenderContext<AstroRenderer>,
	canvasElement: AstroRenderer['canvasElement'],
) => {
	const element = await storyFn()
	showMain()
	canvasElement.innerHTML = element
	simulatePageLoad(canvasElement)
}
