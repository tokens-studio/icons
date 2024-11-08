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
			d='M6 14h4m-4 0v-3.333M6 14H2.4a.4.4 0 0 1-.4-.4v-2.533a.4.4 0 0 1 .4-.4H6M10 14V6m0 8h3.6a.4.4 0 0 0 .4-.4V2.4a.4.4 0 0 0-.4-.4h-3.2a.4.4 0 0 0-.4.4V6m-4 4.667V6.4c0-.22.18-.4.4-.4H10'
		/>
	</svg>
);
export default SvgReports;
