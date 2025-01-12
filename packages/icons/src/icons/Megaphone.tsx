import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMegaphone = ({
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
			d='M9.33333 9.33339V4.00006M9.33333 9.33339L13.4015 11.6581C13.6682 11.8105 14 11.6179 14 11.3108V2.02266C14 1.71553 13.6682 1.52298 13.4015 1.67536L9.33333 4.00006M9.33333 9.33339H4.66667C3.19391 9.33339 2 8.13946 2 6.66672C2 5.19396 3.19391 4.00006 4.66667 4.00006H9.33333'
			stroke='currentColor'
		/>
		<path
			d='M5.17143 12.8668L4.66666 9.33337H7.33332L7.78479 12.4934C7.89839 13.2886 7.28132 14 6.4781 14C5.82123 14 5.26432 13.517 5.17143 12.8668Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgMegaphone;
