import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStatsReport = ({
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
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.667 6H4M10.333 7.333a1.667 1.667 0 1 1 0-3.333 1.667 1.667 0 0 1 0 3.333M4 4h2M12 12l-3-2-1.667 1.333L4 8.667'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2 13.6V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgStatsReport;
