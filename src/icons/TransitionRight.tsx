import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTransitionRight = ({
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
			d='M1.333 12V4a2 2 0 0 1 2-2h1.334a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 2H12a2.667 2.667 0 0 1 2.667 2.667v6.666A2.667 2.667 0 0 1 12 14h-1.333M6.667 8H12m0 0-2-2m2 2-2 2'
		/>
	</svg>
);
export default SvgTransitionRight;
