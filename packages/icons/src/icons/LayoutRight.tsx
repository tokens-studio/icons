import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLayoutRight = ({
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
			d='M13.6 2H2.4C2.17909 2 2 2.17909 2 2.4V13.6C2 13.8209 2.17909 14 2.4 14H13.6C13.8209 14 14 13.8209 14 13.6V2.4C14 2.17909 13.8209 2 13.6 2Z'
			stroke='currentColor'
		/>
		<path d='M9.5 6.5V14' stroke='currentColor' />
		<path d='M14 6.5H9.5H2' stroke='currentColor' />
	</svg>
);
export default SvgLayoutRight;
