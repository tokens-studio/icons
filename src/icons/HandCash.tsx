import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHandCash = ({
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
			d='m1.333 7.333 1.871-2.105a2.67 2.67 0 0 1 1.994-.895h.135M1.333 13H5l2.667-2s.54-.365 1.333-1c1.667-1.333 0-3.444-1.667-2.334-1.357.905-2.666 1.668-2.666 1.668'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M5.333 9V4.667c0-.737.597-1.334 1.334-1.334h6.666c.737 0 1.334.597 1.334 1.334v4c0 .736-.597 1.333-1.334 1.333H9'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 8a1.333 1.333 0 1 1 0-2.667A1.333 1.333 0 0 1 10 8M13 6.673l.007-.007M7 6.673l.007-.007'
		/>
	</svg>
);
export default SvgHandCash;
