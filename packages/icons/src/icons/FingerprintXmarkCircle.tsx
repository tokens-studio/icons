import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFingerprintXmarkCircle = ({
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
			d='M4.66666 10.6667V7.57435C4.66666 7.23455 4.7335 6.90829 4.85633 6.60515M11.3333 9.33335V8.54362M6.14814 5.15633C6.67779 4.84705 7.31472 4.66669 7.99999 4.66669C9.51966 4.66669 10.8018 5.55377 11.2031 6.76669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66666 11.3334V9.88235M9.33332 11.3334V7.90195C9.33332 7.21975 8.73639 6.66669 7.99999 6.66669C7.26359 6.66669 6.66666 7.21975 6.66666 7.90195V8.43142'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00001 14.6666C4.31811 14.6666 1.33334 11.6818 1.33334 7.99998C1.33334 4.31808 4.31811 1.33331 8.00001 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998C14.6667 8.69678 14.5597 9.36865 14.3615 9.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.4142 14.9093L12.8285 13.4951M12.8285 13.4951L14.2427 12.0809M12.8285 13.4951L11.4142 12.0809M12.8285 13.4951L14.2427 14.9093'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFingerprintXmarkCircle;
