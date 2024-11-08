import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFog = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M7 9.333h4M7 14.667h4M5.667 12h6.666M3.333 11.588c-.874-.45-1.666-1.33-1.666-2.921C1.667 6 3.889 5.333 5 5.333c0-1.333 0-4 4-4s4 2.667 4 4c1.111 0 3.333.667 3.333 3.334 0 1.592-.792 2.47-1.666 2.92'
		/>
	</svg>
);
export default SvgFog;
