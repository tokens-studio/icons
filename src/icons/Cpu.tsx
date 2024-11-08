import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCpu = ({
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
			d='M5.333 10.267V5.733c0-.22.18-.4.4-.4h4.534c.22 0 .4.18.4.4v4.534a.4.4 0 0 1-.4.4H5.733a.4.4 0 0 1-.4-.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.333 3.067v9.866a.4.4 0 0 1-.4.4H3.067a.4.4 0 0 1-.4-.4V3.067c0-.221.179-.4.4-.4h9.866c.221 0 .4.179.4.4M11.333 2.667V1.333M8 2.667V1.333M4.667 2.667V1.333M4.667 13.333v1.334M8 13.333v1.334M11.333 13.333v1.334M13.333 11.333h1.334M13.333 8h1.334M13.333 4.667h1.334M2.667 11.333H1.333M2.667 8H1.333M2.667 4.667H1.333'
		/>
	</svg>
);
export default SvgCpu;
