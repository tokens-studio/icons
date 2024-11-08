import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHomeSecure = ({
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
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.333 8H9.6c.22 0 .4.18.4.4v1.867a.4.4 0 0 1-.4.4H6.4a.4.4 0 0 1-.4-.4V8.4c0-.22.18-.4.4-.4h.267m2.666 0V6.667c0-.445-.266-1.334-1.333-1.334s-1.333.89-1.333 1.334V8m2.666 0H6.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 5.333 7.821 2.09a.4.4 0 0 1 .358 0l6.488 3.244M13.333 7.333v5.334c0 .736-.597 1.333-1.333 1.333H4a1.333 1.333 0 0 1-1.333-1.333V7.333'
		/>
	</svg>
);
export default SvgHomeSecure;
