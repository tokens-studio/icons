import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFingerprintLockCircle = ({
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
			d='M4.66667 10.6667V7.57435C4.66667 7.23455 4.73351 6.90829 4.85635 6.60515M11.3333 9.00002V8.54362M6.14815 5.15633C6.67781 4.84705 7.31474 4.66669 8 4.66669C9.51967 4.66669 10.8018 5.55377 11.2031 6.76669'
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
			d='M9.33333 14.5333C8.90253 14.6207 8.45659 14.6666 7.99999 14.6666C4.31809 14.6666 1.33333 11.6818 1.33333 7.99998C1.33333 4.31808 4.31809 1.33331 7.99999 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998C14.6667 8.16931 14.6603 8.33711 14.6479 8.50325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.1111 12.3333H14.2667C14.4876 12.3333 14.6667 12.5124 14.6667 12.7333V14.2667C14.6667 14.4876 14.4876 14.6667 14.2667 14.6667H11.7333C11.5124 14.6667 11.3333 14.4876 11.3333 14.2667V12.7333C11.3333 12.5124 11.5124 12.3333 11.7333 12.3333H11.8889M14.1111 12.3333V11.1667C14.1111 10.7778 13.8889 10 13 10C12.1111 10 11.8889 10.7778 11.8889 11.1667V12.3333M14.1111 12.3333H11.8889'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFingerprintLockCircle;
