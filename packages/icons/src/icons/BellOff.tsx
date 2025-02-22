import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBellOff = ({
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
			d='M4.18033 4.33334C4.06185 4.73982 4 5.16651 4 5.60001C4 10.5778 2 12 2 12H12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.17163 2.58302C5.92178 1.78286 6.93922 1.33334 8.00008 1.33334C9.06095 1.33334 10.0784 1.78286 10.8285 2.58302C11.5786 3.38318 12.0001 4.46842 12.0001 5.60001C12.0001 10.5778 14.0001 12 14.0001 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.15335 14C9.03615 14.2021 8.86795 14.3698 8.66548 14.4863C8.46308 14.6029 8.23361 14.6643 8.00001 14.6643C7.76641 14.6643 7.53695 14.6029 7.33455 14.4863C7.13215 14.3698 6.96388 14.2021 6.84668 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 2L14 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBellOff;
