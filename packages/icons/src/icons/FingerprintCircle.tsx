import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFingerprintCircle = ({
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
			d='M4.66667 10.6667V7.57435C4.66667 7.23455 4.73351 6.90829 4.85635 6.60515M11.3333 10.6667V8.54362M6.14815 5.15633C6.67781 4.84705 7.31474 4.66669 8 4.66669C9.51967 4.66669 10.8018 5.55377 11.2031 6.76669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66667 11.3334V9.88235M9.33334 11.3334V7.90195C9.33334 7.21975 8.7364 6.66669 8.00001 6.66669C7.26361 6.66669 6.66667 7.21975 6.66667 7.90195V8.43142'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99999 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 7.99999 1.33331C4.31809 1.33331 1.33333 4.31808 1.33333 7.99998C1.33333 11.6818 4.31809 14.6666 7.99999 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFingerprintCircle;
