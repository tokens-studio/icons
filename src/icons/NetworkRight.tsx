import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNetworkRight = ({
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
			d='M14.667 9.733V13.6a.4.4 0 0 1-.4.4h-2.534a.4.4 0 0 1-.4-.4V9.733c0-.22.18-.4.4-.4h2.534c.22 0 .4.18.4.4ZM4.667 6.067v3.866a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4V6.067c0-.221.18-.4.4-.4h2.534c.22 0 .4.179.4.4ZM14.667 2.4v3.867a.4.4 0 0 1-.4.4h-2.534a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h2.534c.22 0 .4.18.4.4ZM11.333 11.667H9a1.333 1.333 0 0 1-1.333-1.334V5.667c0-.737.597-1.334 1.333-1.334h2.333M7.667 8h-3'
		/>
	</svg>
);
export default SvgNetworkRight;
