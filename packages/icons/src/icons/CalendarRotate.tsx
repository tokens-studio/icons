import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCalendarRotate = ({
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
			d='M6.66667 14H3.33333C2.59695 14 2 13.4031 2 12.6667V6.66668H14M10 2.66668V1.33334M10 2.66668V4.00001M10 2.66668H7'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 6.66666V3.99999C2 3.26361 2.59695 2.66666 3.33333 2.66666H4.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66663 1.33334V4.00001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 6.66666V3.99999C14 3.26361 13.4031 2.66666 12.6667 2.66666H12.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.4446 11.1111C14.032 10.0647 13.09 9.33334 11.9937 9.33334C10.8214 9.33334 9.82544 10.1697 9.46484 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3301 11.1813H14.2667C14.4876 11.1813 14.6667 11.0023 14.6667 10.7813V9.69986'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.55603 12.8889C9.96856 13.9353 10.9106 14.6667 12.0068 14.6667C13.1791 14.6667 14.1752 13.8303 14.5358 12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6699 12.8187H9.73325C9.51239 12.8187 9.33325 12.9977 9.33325 13.2187V14.3001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCalendarRotate;
