import type {
	AnnotatedStoryFn,
	Args,
	ComponentAnnotations,
	DecoratorFunction,
	LoaderFunction,
	StoryAnnotations,
	StoryContext as GenericStoryContext,
	StrictArgs,
	ProjectAnnotations,
} from '@storybook/types'
import type { AstroRenderer } from './types'

export type {
	Args,
	ArgTypes,
	Parameters,
	StrictArgs,
} from '@storybook/types'
export type { AstroRenderer }

export type Meta<TArgs = Args> = ComponentAnnotations<
	AstroRenderer,
	TArgs
>

export type StoryFn<TArgs = Args> = AnnotatedStoryFn<
	AstroRenderer,
	TArgs
>

export type StoryObj<TArgs = Args> = StoryAnnotations<
	AstroRenderer,
	TArgs
>

export type Decorator<TArgs = StrictArgs> =
	DecoratorFunction<AstroRenderer, TArgs>
export type Loader<TArgs = StrictArgs> = LoaderFunction<
	AstroRenderer,
	TArgs
>
export type StoryContext<TArgs = StrictArgs> =
	GenericStoryContext<AstroRenderer, TArgs>
export type Preview = ProjectAnnotations<AstroRenderer>
