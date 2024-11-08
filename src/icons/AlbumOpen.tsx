import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlbumOpen = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M11 1.467a6.669 6.669 0 0 1 0 13.066'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11 6c.76.19 1.333 1.013 1.333 2S11.761 9.81 11 10M1.667 1.333h6.666v13.334H1.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M3.667 10.333a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 0V5.067c0-.221.179-.4.4-.4h1.6'
		/>
	</svg>
);
export default SvgAlbumOpen;
