import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBellNotification = ({
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
			d='M12.0891 7.33334C12.477 10.917 14 12 14 12H2C2 12 4 10.5778 4 5.60001C4 4.46842 4.42143 3.38318 5.17157 2.58302C5.92172 1.78286 6.93913 1.33334 8 1.33334C8.22487 1.33334 8.4478 1.35354 8.66667 1.393'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 5.33334C13.7713 5.33334 14.6667 4.43791 14.6667 3.33334C14.6667 2.22878 13.7713 1.33334 12.6667 1.33334C11.5621 1.33334 10.6667 2.22878 10.6667 3.33334C10.6667 4.43791 11.5621 5.33334 12.6667 5.33334Z'
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
	</svg>
);
export default SvgBellNotification;
