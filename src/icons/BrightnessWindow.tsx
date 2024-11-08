import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBrightnessWindow = ({
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
			strokeWidth={1.5}
			d='M8 14H2.667a1.333 1.333 0 0 1-1.334-1.333V3.333C1.333 2.597 1.93 2 2.667 2h10.666c.737 0 1.334.597 1.334 1.333V8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 4.667h13.334M3.333 3.34l.007-.007M5.333 3.34l.007-.007M7.333 3.34l.007-.007'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='m12 9.333.816.696 1.07.085.085 1.07.696.816-.696.816-.085 1.07-1.07.085-.816.696-.816-.696-1.07-.085-.085-1.07L9.333 12l.696-.816.085-1.07 1.07-.085z'
		/>
		<path
			fill='currentColor'
			d='m11.184 13.97.816.697V9.333l-.816.696-1.07.085-.085 1.07-.696.816.696.816.085 1.07z'
		/>
	</svg>
);
export default SvgBrightnessWindow;
