import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBitcoinCircle = ({
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
			d='M6 7.99999C6.00005 8.56106 6 10.0713 6 10.9294C6 11.1503 6.17909 11.3295 6.39999 11.3308C8.37747 11.3424 10 11.3813 10 9.66666C10 7.83759 8 7.99999 6 7.99999ZM6 7.99999L6.00002 5.0706C6.00002 4.84968 6.17911 4.67046 6.40003 4.66917C8.37747 4.6576 10 4.61865 10 6.33333C10 8.16239 8 7.99999 6 7.99999Z'
			stroke='currentColor'
		/>
		<path
			d='M8 4.66666V3.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 12.3333V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00001 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00001C1.33334 4.31811 4.31811 1.33334 8.00001 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00001 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBitcoinCircle;
