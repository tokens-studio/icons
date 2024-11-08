import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHorizDistributionLeft = ({
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
			d='M12.667 11.333V4.667m0 6.666h-3.6a.4.4 0 0 1-.4-.4V5.067c0-.221.179-.4.4-.4h3.6m0 6.666v2m0-8.666v-2M6 11.333V4.667m0 6.666H3.733a.4.4 0 0 1-.4-.4V5.067c0-.221.18-.4.4-.4H6m0 6.666v2m0-8.666v-2'
		/>
	</svg>
);
export default SvgHorizDistributionLeft;
