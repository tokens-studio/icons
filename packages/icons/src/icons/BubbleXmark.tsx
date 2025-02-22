import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBubbleXmark = ({
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
			d='M8.66665 1.36626C8.44738 1.34449 8.22498 1.33334 7.99998 1.33334C4.31808 1.33334 1.33331 4.31811 1.33331 8.00001C1.33331 9.21428 1.65796 10.3527 2.22519 11.3333L1.66665 14.3333L4.66665 13.7748C5.64723 14.342 6.78571 14.6667 7.99998 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 7.77501 14.6555 7.55261 14.6337 7.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.4141 4.90933L12.8283 3.49512M12.8283 3.49512L14.2425 2.0809M12.8283 3.49512L11.4141 2.0809M12.8283 3.49512L14.2425 4.90933'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBubbleXmark;
