import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAntennaSignalTag = ({
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
			d='M1.33325 10V6C1.33325 3.79086 3.12411 2 5.33325 2H10.6666C12.8757 2 14.6666 3.79086 14.6666 6V10C14.6666 12.2091 12.8757 14 10.6666 14H5.33325C3.12411 14 1.33325 12.2091 1.33325 10Z'
			stroke='currentColor'
		/>
		<path
			d='M10 6C10 6 10.6667 6.75 10.6667 8C10.6667 9.25 10 10 10 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 8.00667L8.00667 7.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 4.66667C11.3333 4.66667 12.6666 5.85715 12.6666 8C12.6666 10.1429 11.3333 11.3333 11.3333 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.99992 6C5.99992 6 5.33325 6.75 5.33325 8C5.33325 9.25 5.99992 10 5.99992 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66659 4.66667C4.66659 4.66667 3.33325 5.85715 3.33325 8C3.33325 10.1429 4.66659 11.3333 4.66659 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAntennaSignalTag;
