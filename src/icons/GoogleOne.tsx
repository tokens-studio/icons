import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGoogleOne = ({
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
			d='M7.333 3.333v9.334a1.333 1.333 0 1 0 2.667 0V3.333a1.333 1.333 0 1 0-2.667 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.76 2.353 4.498 5.448a1.333 1.333 0 1 0 1.836 1.934l3.261-3.095A1.333 1.333 0 0 0 7.76 2.353'
		/>
	</svg>
);
export default SvgGoogleOne;
