import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFingerprintCheckCircle = ({
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
			d='M4.66675 10.6667V7.57435C4.66675 7.23455 4.73359 6.90829 4.85642 6.60515M11.3334 10.6667V8.54362M6.14823 5.15633C6.67788 4.84705 7.31481 4.66669 8.00008 4.66669C9.51975 4.66669 10.8019 5.55377 11.2031 6.76669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66675 11.3334V9.88235M9.33341 11.3334V7.90195C9.33341 7.21975 8.73648 6.66669 8.00008 6.66669C7.26368 6.66669 6.66675 7.21975 6.66675 7.90195V8.43142'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99992 14.6666C4.31802 14.6666 1.33325 11.6818 1.33325 7.99998C1.33325 4.31808 4.31802 1.33331 7.99992 1.33331C11.6818 1.33331 14.6666 4.31808 14.6666 7.99998C14.6666 8.69678 14.5597 9.36865 14.3614 9.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3333 13.6667L11.6666 15L14.9999 11.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFingerprintCheckCircle;
