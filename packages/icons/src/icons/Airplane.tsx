import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplane = ({
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
			d='M7.00002 3V6.11163C7.00002 6.24955 6.92895 6.37774 6.81202 6.45083L1.85469 9.54913C1.73773 9.62227 1.66669 9.75047 1.66669 9.88833V10.4877C1.66669 10.7479 1.91124 10.9389 2.1637 10.8757L6.50301 9.79093C6.75549 9.7278 7.00002 9.91873 7.00002 10.179V12.1518C7.00002 12.2672 6.95022 12.3769 6.86342 12.4529L5.42323 13.713C5.11769 13.9804 5.35874 14.4803 5.75818 14.4076L7.92849 14.013C7.97575 14.0044 8.02429 14.0044 8.07155 14.013L10.2419 14.4076C10.6413 14.4803 10.8824 13.9804 10.5768 13.713L9.13662 12.4529C9.04982 12.3769 9.00002 12.2672 9.00002 12.1518V10.179C9.00002 9.91873 9.24455 9.7278 9.49702 9.79093L13.8364 10.8757C14.0888 10.9389 14.3334 10.7479 14.3334 10.4877V9.88833C14.3334 9.75047 14.2623 9.62227 14.1454 9.54913L9.18802 6.45083C9.07109 6.37774 9.00002 6.24955 9.00002 6.11163V3C9.00002 2.44771 8.55229 2 8.00002 2C7.44775 2 7.00002 2.44771 7.00002 3Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAirplane;
