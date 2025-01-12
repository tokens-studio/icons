import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSendDollars = ({
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
			d='M6.66667 5.48722C6.1339 4.99543 5.19564 4.65336 4.33333 4.63194M4.33333 4.63194C3.30735 4.60645 2.38889 5.0349 2.38889 6.20517C2.38889 8.35904 6.66667 7.28211 6.66667 9.43591C6.66667 10.6644 5.52813 11.1922 4.33333 11.1526M4.33333 4.63194V3.33337M2 10.1539C2.50126 10.7708 3.43327 11.1227 4.33333 11.1526M4.33333 11.1526V12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66663 8.00004H14M14 8.00004L11.44 5.33337M14 8.00004L11.44 10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSendDollars;
