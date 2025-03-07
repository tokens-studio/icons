import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCar = ({
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
			d='M5.33337 6.66666H10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66663 9.33334H5.33329'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 9.33334H11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 12V7.60699C2 7.42646 2.03668 7.24772 2.10781 7.08179L3.65367 3.47476C3.86377 2.98452 4.34583 2.66666 4.87919 2.66666H11.1208C11.6542 2.66666 12.1362 2.98452 12.3463 3.47476L13.8922 7.08179C13.9633 7.24772 14 7.42646 14 7.60699V12M2 12V13.6C2 13.8209 2.17909 14 2.4 14H4.26667C4.48758 14 4.66667 13.8209 4.66667 13.6V12M2 12H4.66667M14 12V13.6C14 13.8209 13.8209 14 13.6 14H11.7333C11.5124 14 11.3333 13.8209 11.3333 13.6V12M14 12H11.3333M4.66667 12H11.3333'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgCar;
