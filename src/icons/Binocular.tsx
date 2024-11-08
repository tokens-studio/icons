import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBinocular = ({
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
			d='m14.333 9.333-1-3.333S13 4.667 11.667 4.667c0 0 0-1.334-1.334-1.334C9 3.333 9 4.667 9 4.667H7s0-1.334-1.333-1.334c-1.334 0-1.334 1.334-1.334 1.334C3 4.667 2.667 6 2.667 6l-1 3.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4 13.333A2.667 2.667 0 1 0 4 8a2.667 2.667 0 0 0 0 5.333M12 13.333A2.667 2.667 0 1 0 12 8a2.667 2.667 0 0 0 0 5.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 10.667A1.333 1.333 0 1 0 8 8a1.333 1.333 0 0 0 0 2.667'
		/>
	</svg>
);
export default SvgBinocular;
