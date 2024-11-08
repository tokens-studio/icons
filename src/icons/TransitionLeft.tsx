import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTransitionLeft = ({
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
			d='M14.667 12V4a2 2 0 0 0-2-2h-1.334a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1.334a2 2 0 0 0 2-2Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.333 2H4a2.667 2.667 0 0 0-2.667 2.667v6.666A2.667 2.667 0 0 0 4 14h1.333M9.333 8H4m0 0 2-2M4 8l2 2'
		/>
	</svg>
);
export default SvgTransitionLeft;
