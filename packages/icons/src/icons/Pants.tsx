import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPants = ({
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
			d='M7.99988 12.6667H10.9574C11.1687 12.6667 11.3435 12.5024 11.3567 12.2916L11.9733 2.42495C11.9877 2.19467 11.8048 2 11.5741 2H4.42272C4.19309 2 4.0106 2.19291 4.02333 2.42219L4.64556 13.6222C4.65733 13.8341 4.83265 14 5.04494 14H7.59988C7.82081 14 7.99988 13.8209 7.99988 13.6V5.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPants;
