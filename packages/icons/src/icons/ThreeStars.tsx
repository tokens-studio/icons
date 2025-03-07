import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgThreeStars = ({
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
			d='M3.09001 9.61007L3.78268 8.1414C3.8716 7.95287 4.12848 7.95287 4.2174 8.1414L4.91007 9.61007L6.4591 9.84707C6.65785 9.87747 6.73704 10.1331 6.59317 10.2799L5.47251 11.4223L5.73699 13.0362C5.77095 13.2435 5.56308 13.4015 5.38525 13.3036L4.00004 12.5412L2.61483 13.3036C2.437 13.4015 2.22913 13.2435 2.26309 13.0362L2.52757 11.4223L1.40691 10.2799C1.26302 10.1331 1.34223 9.87747 1.54098 9.84707L3.09001 9.61007Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.09 9.61007L11.7827 8.1414C11.8716 7.95287 12.1285 7.95287 12.2174 8.1414L12.9101 9.61007L14.4591 9.84707C14.6578 9.87747 14.737 10.1331 14.5932 10.2799L13.4725 11.4223L13.737 13.0362C13.771 13.2435 13.5631 13.4015 13.3852 13.3036L12 12.5412L10.6148 13.3036C10.437 13.4015 10.2291 13.2435 10.2631 13.0362L10.5276 11.4223L9.4069 10.2799C9.26303 10.1331 9.34223 9.87747 9.54096 9.84707L11.09 9.61007Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.08997 3.6101L7.78271 2.14141C7.87157 1.95287 8.12851 1.95287 8.21737 2.14141L8.91011 3.6101L10.4591 3.84706C10.6578 3.87746 10.737 4.13316 10.5932 4.27984L9.47251 5.42225L9.73697 7.0362C9.77097 7.24347 9.56311 7.40147 9.38524 7.3036L8.00004 6.54119L6.61483 7.3036C6.437 7.40147 6.22913 7.24347 6.26309 7.0362L6.52757 5.42225L5.40691 4.27984C5.26302 4.13316 5.34223 3.87746 5.54098 3.84706L7.08997 3.6101Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgThreeStars;
