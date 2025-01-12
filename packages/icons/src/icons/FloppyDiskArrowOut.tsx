import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFloppyDiskArrowOut = ({
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
			d='M3 4.33333V3.33333C3 2.59695 3.59695 2 4.33333 2H11.7811C12.1347 2 12.4738 2.14047 12.7239 2.39053L14.6095 4.27614C14.8595 4.52619 15 4.86533 15 5.21895V12.6667C15 13.4031 14.4031 14 13.6667 14H4.33333C3.59695 14 3 13.4031 3 12.6667V11.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33337 2H11.6667V5.6C11.6667 5.82091 11.4876 6 11.2667 6H6.73337C6.51246 6 6.33337 5.82091 6.33337 5.6V2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13 14V9.06669C13 8.84575 12.8209 8.66669 12.6 8.66669H11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5 14V11.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.99996 8H1.66663M1.66663 8L3.66663 6M1.66663 8L3.66663 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFloppyDiskArrowOut;
