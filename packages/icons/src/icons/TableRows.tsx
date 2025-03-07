import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTableRows = ({
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
			d='M2 8H5H8H11H14M2 8V11M2 8V5M14 8V11M14 8V5M2 11V13.6C2 13.8209 2.17909 14 2.4 14H5H8H11H13.6C13.8209 14 14 13.8209 14 13.6V11M2 11H5H8H11H14M2 5V2.4C2 2.17909 2.17909 2 2.4 2H5H8H11H13.6C13.8209 2 14 2.17909 14 2.4V5M2 5H5H8H11H14'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgTableRows;
