import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCandlestickChart = ({
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
			d='M3.333 10.667V9.333M8 14v-1.333M12.667 8.667V7.333M3.333 5.333V4M8 8.667V7.333M12.667 3.333V2M4.667 5.733v3.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4v-3.2c0-.22.18-.4.4-.4h1.867c.22 0 .4.18.4.4M9.333 9.067v3.2a.4.4 0 0 1-.4.4H7.067a.4.4 0 0 1-.4-.4v-3.2c0-.221.179-.4.4-.4h1.866c.221 0 .4.179.4.4M14 3.733v3.2a.4.4 0 0 1-.4.4h-1.867a.4.4 0 0 1-.4-.4v-3.2a.4.4 0 0 1 .4-.4H13.6a.4.4 0 0 1 .4.4'
		/>
	</svg>
);
export default SvgCandlestickChart;
