import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRotateCameraRight = ({
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
			d='M14.669 2v2.998c0 .185-.15.335-.336.335a.35.35 0 0 1-.31-.2 6.667 6.667 0 0 0-12.655 2.2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4 10.933v-4.67c0-.221.18-.4.4-.4h.782a.4.4 0 0 0 .336-.184l.964-1.496A.4.4 0 0 1 6.818 4h2.364a.4.4 0 0 1 .336.183l.964 1.496a.4.4 0 0 0 .336.183h.782c.22 0 .4.18.4.4v4.671a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666M1.367 14v-2.998c0-.185.15-.335.335-.335.134 0 .254.079.311.2a6.667 6.667 0 0 0 12.655-2.2'
		/>
	</svg>
);
export default SvgRotateCameraRight;
