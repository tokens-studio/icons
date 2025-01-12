import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWebWindowEnergyConsumption = ({
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
			d='M3.33334 4.66675H4.00001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33334 11.8096V4.19055C1.33334 3.34898 1.99662 2.66675 2.81482 2.66675H13.1852C14.0034 2.66675 14.6667 3.34898 14.6667 4.19055V11.8096C14.6667 12.6512 14.0034 13.3334 13.1852 13.3334H2.81482C1.99662 13.3334 1.33334 12.6512 1.33334 11.8096Z'
			stroke='currentColor'
		/>
		<path
			d='M7.77779 6L6.66666 8H9.33332L8.22219 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWebWindowEnergyConsumption;
