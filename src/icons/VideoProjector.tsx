import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVideoProjector = ({
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
			d='M2.667 12.667H4M12 12.667h1.333'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 10.933V5.067c0-.221.18-.4.4-.4h12.534c.22 0 .4.179.4.4v5.866a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m3.333 6.673.007-.007M5.333 6.673l.007-.007M7.333 6.673l.007-.007M3.333 9.34l.007-.007M5.333 9.34l.007-.007M7.333 9.34l.007-.007M11.333 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666'
		/>
	</svg>
);
export default SvgVideoProjector;
