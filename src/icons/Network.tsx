import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNetwork = ({
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
			d='M6.267 1.333H2.4a.4.4 0 0 0-.4.4v2.534c0 .22.18.4.4.4h3.867a.4.4 0 0 0 .4-.4V1.733a.4.4 0 0 0-.4-.4ZM9.933 11.333H6.067a.4.4 0 0 0-.4.4v2.534c0 .22.179.4.4.4h3.866a.4.4 0 0 0 .4-.4v-2.534a.4.4 0 0 0-.4-.4ZM13.6 1.333H9.733a.4.4 0 0 0-.4.4v2.534c0 .22.18.4.4.4H13.6a.4.4 0 0 0 .4-.4V1.733a.4.4 0 0 0-.4-.4ZM4.333 4.667V7c0 .736.597 1.333 1.334 1.333h4.666c.737 0 1.334-.597 1.334-1.333V4.667M8 8.333v3'
		/>
	</svg>
);
export default SvgNetwork;
