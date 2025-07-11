import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOutput = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M3 12H11M11 12C11 10.6193 12.1193 9.5 13.5 9.5C14.8807 9.5 16 10.6193 16 12C16 13.3807 14.8807 14.5 13.5 14.5C12.1193 14.5 11 13.3807 11 12ZM10 19.5H13.5C17.6421 19.5 21 16.1421 21 12C21 7.85786 17.6421 4.5 13.5 4.5H10'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgOutput;
