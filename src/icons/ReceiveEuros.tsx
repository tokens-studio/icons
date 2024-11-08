import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReceiveEuros = ({
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
			d='M14 8H8.667m0 0 2.56-2.667M8.667 8l2.56 2.667M7.333 5.002a3.2 3.2 0 0 0-1.42-.335C4.12 4.667 2.667 6.159 2.667 8c0 1.84 1.453 3.333 3.246 3.333.51 0 .991-.12 1.42-.335M2 7.333h4M2 8.667h4'
		/>
	</svg>
);
export default SvgReceiveEuros;
