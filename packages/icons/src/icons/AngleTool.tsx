import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAngleTool = ({
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
			d='M2 14V2H6V10H14V14H2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M8.66675 12.6667V14' stroke='currentColor' strokeLinecap='round' />
		<path d='M6 12.6667V14' stroke='currentColor' strokeLinecap='round' />
		<path d='M2 4.66667H3.33333' stroke='currentColor' strokeLinecap='round' />
		<path d='M2 7.33333H3.33333' stroke='currentColor' strokeLinecap='round' />
		<path d='M2 10H3.33333' stroke='currentColor' strokeLinecap='round' />
		<path d='M11.3333 12.6667V14' stroke='currentColor' strokeLinecap='round' />
	</svg>
);
export default SvgAngleTool;
