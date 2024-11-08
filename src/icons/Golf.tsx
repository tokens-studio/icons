import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGolf = ({
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
			d='M8 12V8m0 0V2.273a.4.4 0 0 1 .558-.367l5.629 2.412a.4.4 0 0 1 .014.729zM8 14.667c2.577 0 4.667-1.045 4.667-2.334C12.667 11.045 10.577 10 8 10s-4.667 1.045-4.667 2.333S5.423 14.667 8 14.667'
		/>
	</svg>
);
export default SvgGolf;
