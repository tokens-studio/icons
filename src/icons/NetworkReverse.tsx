import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNetworkReverse = ({
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
			d='M6.267 14.667H2.4a.4.4 0 0 1-.4-.4v-2.534c0-.22.18-.4.4-.4h3.867c.22 0 .4.18.4.4v2.534a.4.4 0 0 1-.4.4ZM9.933 4.667H6.067a.4.4 0 0 1-.4-.4V1.733c0-.22.179-.4.4-.4h3.866c.221 0 .4.18.4.4v2.534a.4.4 0 0 1-.4.4ZM13.6 14.667H9.733a.4.4 0 0 1-.4-.4v-2.534c0-.22.18-.4.4-.4H13.6a.4.4 0 0 1 .4.4v2.534a.4.4 0 0 1-.4.4ZM4.333 11.333V9c0-.736.597-1.333 1.334-1.333h4.666c.737 0 1.334.597 1.334 1.333v2.333M8 7.667v-3'
		/>
	</svg>
);
export default SvgNetworkReverse;
