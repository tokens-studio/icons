import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEmptyPage = ({
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
			d='M2.66675 14.2666V1.73331C2.66675 1.5124 2.84583 1.33331 3.06675 1.33331H10.8344C10.9405 1.33331 11.0422 1.37545 11.1172 1.45047L13.2163 3.54949C13.2913 3.62451 13.3334 3.72625 13.3334 3.83233V14.2666C13.3334 14.4876 13.1543 14.6666 12.9334 14.6666H3.06675C2.84583 14.6666 2.66675 14.4876 2.66675 14.2666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 1.33331V3.59998C10.6667 3.82089 10.8458 3.99998 11.0667 3.99998H13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEmptyPage;
