import { lazy, Suspense } from 'react';
import type { SVGProps } from 'react';
import type { SVGRProps } from './types.js';
import { IconsEnum } from './icons-enum.js';

interface IconProps extends SVGRProps {
	iconUrl?: string;
	iconId?: IconsEnum;
}

/**
 * Generic Icon wrapper component that can also accept
 * a string iconId (typed by IconsEnum), an iconUrl URL or a custom SVG element
 */
export const Icon = (props: SVGProps<SVGSVGElement> & IconProps) => {
	const { iconUrl, iconId, ...rest } = props;
	const { title } = rest;
	if (iconUrl) {
		return (
			<img
				src={iconUrl}
				alt={title ?? 'Icon'}
				width={props.width ?? 16}
				height={props.height ?? 16}
			/>
		);
	}

	if (iconId) {
		const DynamicIcon = lazy(() =>
			import(
				/* @vite-ignore */ /* webpackIgnore: true */ new URL(
					`./icons/${iconId}.js`,
					import.meta.url,
				).pathname
			).catch(() => {
				console.error(`Error loading icon: ${iconId}`);
				return { default: () => <img src='not-found.jpg' /> };
			}),
		);
		return (
			<Suspense fallback={'..'}>
				<DynamicIcon {...rest} />
			</Suspense>
		);
	}

	return null;
};
export default Icon;
