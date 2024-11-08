import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPause = ({
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
			d='M4 12.267V3.733c0-.22.18-.4.4-.4h1.867c.22 0 .4.18.4.4v8.534a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4ZM9.333 12.267V3.733c0-.22.18-.4.4-.4H11.6a.4.4 0 0 1 .4.4v8.534a.4.4 0 0 1-.4.4H9.733a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgPause;
