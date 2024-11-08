import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArcade = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='m7.333 5.667-.8.333-4.965 2.257a.4.4 0 0 0-.235.364v.091a.4.4 0 0 0 .235.364l5.88 2.673c.35.16.753.16 1.104 0l5.88-2.673a.4.4 0 0 0 .235-.364v-.09a.4.4 0 0 0-.235-.365L9.467 6l-.8-.333'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M14.667 8.667v2.741a.4.4 0 0 1-.236.365L8.547 14.42a1.33 1.33 0 0 1-1.094 0l-5.884-2.648a.4.4 0 0 1-.236-.365V8.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 5.333a2 2 0 1 1 0-4 2 2 0 0 1 0 4'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M7.333 5.333v3.334a.667.667 0 1 0 1.334 0V5.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 8.667h.666'
		/>
	</svg>
);
export default SvgArcade;
