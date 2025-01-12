import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCut = ({
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
			d='M12.3333 8H12.6667H13'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M15.6667 8H16H16.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.15741 4.66665C5.47411 4.31281 5.66667 3.84555 5.66667 3.33331C5.66667 2.22875 4.77124 1.33331 3.66667 1.33331C2.56211 1.33331 1.66667 2.22875 1.66667 3.33331C1.66667 4.43788 2.56211 5.33331 3.66667 5.33331C4.25901 5.33331 4.7912 5.07581 5.15741 4.66665ZM5.15741 4.66665L13.6667 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.15741 11.3333C5.47411 11.6872 5.66667 12.1544 5.66667 12.6667C5.66667 13.7713 4.77124 14.6667 3.66667 14.6667C2.56211 14.6667 1.66667 13.7713 1.66667 12.6667C1.66667 11.5621 2.56211 10.6667 3.66667 10.6667C4.25901 10.6667 4.7912 10.9242 5.15741 11.3333ZM5.15741 11.3333L13.6667 4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCut;
