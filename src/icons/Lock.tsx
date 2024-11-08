import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLock = ({
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
			d='M10.667 8h.933c.22 0 .4.179.4.4v4.533a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4V8.4c0-.221.18-.4.4-.4h.933m5.334 0V5.333c0-.889-.534-2.666-2.667-2.666S5.333 4.444 5.333 5.333V8m5.334 0H5.333'
		/>
	</svg>
);
export default SvgLock;
