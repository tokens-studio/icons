import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgModernTv4K = ({
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
			d='M4.667 14h6.666M9 4.667v2.666m0 0v1.334m0-1.334.914-1.044m0 0 1.42-1.622m-1.42 1.622 1.42 2.378M6.333 4.667l-2 3h2.334v1'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 10.933V2.4c0-.22.18-.4.4-.4h12.534c.22 0 .4.18.4.4v8.533a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgModernTv4K;
