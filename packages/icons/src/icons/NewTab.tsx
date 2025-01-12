import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNewTab = ({
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
			d='M1.33337 12.6667V3.33333C1.33337 2.59695 1.93033 2 2.66671 2H13.3334C14.0698 2 14.6667 2.59695 14.6667 3.33333V12.6667C14.6667 13.4031 14.0698 14 13.3334 14H2.66671C1.93033 14 1.33337 13.4031 1.33337 12.6667Z'
			stroke='currentColor'
		/>
		<path
			d='M1.33337 4.66663H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 9.33337H8M8 9.33337H10M8 9.33337V7.33337M8 9.33337V11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgNewTab;
