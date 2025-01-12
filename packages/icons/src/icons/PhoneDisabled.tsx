import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPhoneDisabled = ({
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
			d='M5.85307 5.66671L6.17994 3.91331L5.20965 1.33337H2.70904C1.95734 1.33337 1.36533 1.95395 1.47757 2.69721C1.66905 3.96518 2.11556 5.93805 3.15015 7.83124M7.29417 9.00004C7.85197 9.49604 8.52537 9.92784 9.33331 10.3334L12.0788 9.80137L14.6666 10.7875V13.177C14.6666 13.9717 13.9786 14.5776 13.202 14.4087C11.3156 13.9983 7.98251 13.004 5.48255 10.7875'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 2L2 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPhoneDisabled;
