import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLockSquare = ({
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
			d='M9.778 8h.489c.22 0 .4.179.4.4v2.533a.4.4 0 0 1-.4.4H5.733a.4.4 0 0 1-.4-.4V8.4c0-.221.18-.4.4-.4h.49m3.555 0V6.333c0-.555-.356-1.666-1.778-1.666s-1.778 1.11-1.778 1.666V8m3.556 0H6.222'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2 12.667V3.333C2 2.597 2.597 2 3.333 2h9.334C13.403 2 14 2.597 14 3.333v9.334c0 .736-.597 1.333-1.333 1.333H3.333A1.333 1.333 0 0 1 2 12.667Z'
		/>
	</svg>
);
export default SvgLockSquare;
