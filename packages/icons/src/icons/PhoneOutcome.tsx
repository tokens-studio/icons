import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPhoneOutcome = ({
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
			d='M10.6666 3.33337H14.6666M14.6666 3.33337L12.6666 1.33337M14.6666 3.33337L12.6666 5.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.0788 9.80137L9.33334 10.3334C7.47888 9.40257 6.33334 8.33337 5.66667 6.66671L6.17997 3.91331L5.20969 1.33337H2.70908C1.95738 1.33337 1.36544 1.95456 1.4777 2.69783C1.75798 4.55337 2.58436 7.91771 5.00001 10.3334C7.53681 12.8702 11.1905 13.971 13.2013 14.4085C13.9779 14.5775 14.6667 13.9717 14.6667 13.177V10.7875L12.0788 9.80137Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPhoneOutcome;
