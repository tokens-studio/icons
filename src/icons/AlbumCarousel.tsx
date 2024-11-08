import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlbumCarousel = ({
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
			d='M1.333 12.933V3.067c0-.221.18-.4.4-.4H11.6a.4.4 0 0 1 .4.4v9.866a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M14.667 4v8M7.333 9.667a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 0V5.733c0-.22.18-.4.4-.4h.934'
		/>
	</svg>
);
export default SvgAlbumCarousel;
