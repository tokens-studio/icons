import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNumber0Square = ({
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
			d='M2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4V13.6C14 13.8209 13.8209 14 13.6 14H2.4C2.17909 14 2 13.8209 2 13.6Z'
			stroke='currentColor'
		/>
		<path
			d='M6.33337 9.33337V6.66671C6.33337 5.93033 6.93031 5.33337 7.66671 5.33337H8.33337C9.06977 5.33337 9.66671 5.93033 9.66671 6.66671V9.33337C9.66671 10.0698 9.06977 10.6667 8.33337 10.6667H7.66671C6.93031 10.6667 6.33337 10.0698 6.33337 9.33337Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgNumber0Square;
