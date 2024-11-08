import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMedal = ({
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
			d='M9.514 6.963 12 1.333M6.21 7.088 3.334 1.333M8.508 6.7 5.89 1.333m3.683 0L8.88 3M4 10.667a4 4 0 1 0 8 0 4 4 0 0 0-8 0'
		/>
	</svg>
);
export default SvgMedal;
