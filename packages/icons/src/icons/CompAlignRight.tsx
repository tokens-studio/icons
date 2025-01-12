import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCompAlignRight = ({
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
			d='M14 14.6666V1.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 10.6666H3.33333C2.59695 10.6666 2 10.0697 2 9.33331V6.66665C2 5.93027 2.59695 5.33331 3.33333 5.33331H10C10.7364 5.33331 11.3333 5.93027 11.3333 6.66665V9.33331C11.3333 10.0697 10.7364 10.6666 10 10.6666Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgCompAlignRight;
