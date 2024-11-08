import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReportColumns = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2 4.933V2.4c0-.22.18-.4.4-.4h3.867c.22 0 .4.18.4.4v2.533a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4ZM9.333 13.6v-2.533c0-.221.18-.4.4-.4H13.6c.22 0 .4.179.4.4V13.6a.4.4 0 0 1-.4.4H9.733a.4.4 0 0 1-.4-.4ZM9.333 8.267V2.4c0-.22.18-.4.4-.4H13.6c.22 0 .4.18.4.4v5.867a.4.4 0 0 1-.4.4H9.733a.4.4 0 0 1-.4-.4ZM2 13.6V7.733c0-.22.18-.4.4-.4h3.867c.22 0 .4.18.4.4V13.6a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgReportColumns;
