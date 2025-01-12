import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPrivateWifi = ({
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
			d='M8 12.34L8.00667 12.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 4.66663C5.33337 1.66663 10.6667 1.66663 14.6667 4.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33337 7.33337C6.00004 5.33337 10 5.33337 12.6667 7.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66663 9.66665C7.16689 8.73332 8.83316 8.73305 10.3334 9.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.1112 12.3333H14.2667C14.4876 12.3333 14.6667 12.5124 14.6667 12.7333V14.2667C14.6667 14.4876 14.4876 14.6667 14.2667 14.6667H11.7334C11.5124 14.6667 11.3334 14.4876 11.3334 14.2667V12.7333C11.3334 12.5124 11.5124 12.3333 11.7334 12.3333H11.8889M14.1112 12.3333V11.1667C14.1112 10.7778 13.8889 10 13 10C12.1112 10 11.8889 10.7778 11.8889 11.1667V12.3333M14.1112 12.3333H11.8889'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPrivateWifi;
