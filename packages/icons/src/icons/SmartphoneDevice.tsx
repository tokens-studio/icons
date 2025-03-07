import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSmartphoneDevice = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M8 10.6734L8.00667 10.666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 12.9334V3.06675C4.66675 2.84583 4.84583 2.66675 5.06675 2.66675H10.9334C11.1543 2.66675 11.3334 2.84583 11.3334 3.06675V12.9334C11.3334 13.1543 11.1543 13.3334 10.9334 13.3334H5.06675C4.84583 13.3334 4.66675 13.1543 4.66675 12.9334Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgSmartphoneDevice;
