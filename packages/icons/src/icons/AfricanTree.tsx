import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAfricanTree = ({
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
			d='M8 14.6667V7.99999M8 7.99999V5.33333M8 7.99999L10 5.99999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.28285 12.3838L12.3953 8.2714C13.9554 6.71127 13.7951 4.13687 12.0536 2.78233C9.66938 0.927941 6.33075 0.927947 3.94654 2.78233C2.20498 4.13688 2.04469 6.71133 3.6048 8.2714L7.71718 12.3838C7.87338 12.54 8.12665 12.54 8.28285 12.3838Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAfricanTree;
