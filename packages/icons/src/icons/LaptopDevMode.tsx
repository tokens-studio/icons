import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLaptopDevMode = ({
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
			d='M2.13335 9.48151V2.66671C2.13335 1.93033 2.7303 1.33337 3.46668 1.33337H12.5333C13.2697 1.33337 13.8667 1.93033 13.8667 2.66671V9.48151M2.13335 9.48151H13.8667M2.13335 9.48151L1.14647 12.9704C0.905767 13.8214 1.54509 14.6667 2.42947 14.6667H13.5705C14.4549 14.6667 15.0943 13.8214 14.8535 12.9704L13.8667 9.48151'
			stroke='currentColor'
		/>
		<path
			d='M7.33331 12.6666H8.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33331 4L10.6666 5.33333L9.33331 6.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66665 4L5.33331 5.33333L6.66665 6.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLaptopDevMode;
