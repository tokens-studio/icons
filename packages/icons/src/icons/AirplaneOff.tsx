import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplaneOff = ({
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
			d='M6.58729 6.59125L1.85463 9.54913C1.73767 9.62227 1.66663 9.75047 1.66663 9.88833V10.4877C1.66663 10.7479 1.91118 10.9389 2.16364 10.8757L6.50295 9.79093C6.75543 9.7278 6.99996 9.91873 6.99996 10.179V12.1518C6.99996 12.2672 6.95016 12.3769 6.86336 12.4529L5.42317 13.713C5.11763 13.9804 5.35868 14.4802 5.75812 14.4076L7.92843 14.013C7.97569 14.0044 8.02423 14.0044 8.07149 14.013L10.2418 14.4076C10.6412 14.4802 10.8823 13.9804 10.5768 13.713L9.13656 12.4529C9.04976 12.3769 8.99996 12.2672 8.99996 12.1518V10.179C8.99996 9.91873 9.24449 9.7278 9.49696 9.79093L9.80189 9.86713M6.99996 5V3C6.99996 2.44771 7.44769 2 7.99996 2C8.55223 2 8.99996 2.44771 8.99996 3V6.11163C8.99996 6.24955 9.07103 6.37774 9.18796 6.45083L14.1453 9.54913C14.2622 9.62227 14.3333 9.75047 14.3333 9.88833V10.4877C14.3333 10.7479 14.0888 10.9389 13.8363 10.8757L12.4995 10.5415'
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
export default SvgAirplaneOff;
