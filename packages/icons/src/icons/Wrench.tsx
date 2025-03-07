import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWrench = ({
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
			d='M6.70015 7.07104L1.98611 11.7851C1.46541 12.3058 1.46541 13.15 1.98611 13.6707C2.5068 14.1914 3.35102 14.1914 3.87172 13.6707L8.58575 8.95665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.70013 7.07118C6.13758 5.63583 6.24755 3.75251 7.40726 2.59284C8.56693 1.43316 10.7071 1.17863 11.8856 1.88573L9.85846 3.91285L9.67006 5.98687L11.7441 5.79847L13.7712 3.77135C14.4783 4.94986 14.2238 7.09005 13.0641 8.24971C11.9044 9.40938 10.0211 9.51938 8.58573 8.95678'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWrench;
