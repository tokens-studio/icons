import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVideoCamera = ({
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
			d='M10 8v2.933a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V5.067c0-.221.18-.4.4-.4h7.2c.22 0 .4.179.4.4zm0 0 3.344-2.787a.4.4 0 0 1 .656.308v4.958a.4.4 0 0 1-.656.308z'
		/>
	</svg>
);
export default SvgVideoCamera;
