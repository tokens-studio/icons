import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBishop = ({
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
			d='M4.66667 11.3333H11.3333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M6 8H10' stroke='currentColor' strokeLinecap='round' />
		<path d='M8 2.00001V1.33334' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M7.70293 2.38768C7.08866 3.22219 5.75842 5.21685 6.03814 6.50001C6.30092 7.70554 7.346 8.00001 8 8.00001C8.654 8.00001 9.69906 7.70554 9.96186 6.50001C10.2416 5.21685 8.91133 3.22219 8.29706 2.38768C8.14713 2.18397 7.85286 2.18397 7.70293 2.38768Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M11.8667 14.6667H4.13333C3.80371 14.6667 3.61039 14.2893 3.80033 14.0199C4.67738 12.7761 6.50862 10.0293 6.79526 8.3976C6.83346 8.18 7.0124 8 7.23333 8H8.76666C8.9876 8 9.16653 8.18 9.20473 8.39753C9.49133 10.0293 11.3226 12.7761 12.1997 14.0199C12.3896 14.2893 12.1963 14.6667 11.8667 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgBishop;
