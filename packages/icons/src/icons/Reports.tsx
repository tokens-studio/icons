import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReports = ({
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
			d='M6 14H10M6 14V10.6667M6 14H2.4C2.17909 14 2 13.8209 2 13.6V11.0667C2 10.8457 2.17909 10.6667 2.4 10.6667H6M10 14V6M10 14H13.6C13.8209 14 14 13.8209 14 13.6V2.4C14 2.17909 13.8209 2 13.6 2H10.4C10.1791 2 10 2.17909 10 2.4V6M6 10.6667V6.4C6 6.17909 6.17909 6 6.4 6H10'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgReports;
