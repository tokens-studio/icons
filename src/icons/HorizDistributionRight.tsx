import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHorizDistributionRight = ({
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
			d='M3.333 11.333V4.667m0 6.666h3.6a.4.4 0 0 0 .4-.4V5.067a.4.4 0 0 0-.4-.4h-3.6m0 6.666v2m0-8.666v-2M10 11.333V4.667m0 6.666h2.267a.4.4 0 0 0 .4-.4V5.067a.4.4 0 0 0-.4-.4H10m0 6.666v2m0-8.666v-2'
		/>
	</svg>
);
export default SvgHorizDistributionRight;
