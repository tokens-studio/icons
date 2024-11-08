import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPercentageSquare = ({
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
			strokeWidth={1.5}
			d='M2 13.6V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4Z'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.333 10.667a.333.333 0 1 0 0-.667.333.333 0 0 0 0 .667M5.667 6a.333.333 0 1 0 0-.667.333.333 0 0 0 0 .667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m10.667 5.333-5.334 5.334'
		/>
	</svg>
);
export default SvgPercentageSquare;
