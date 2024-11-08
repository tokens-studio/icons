import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlbum = ({
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
			d='M2 13.6V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M8 10.333a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 0V5.067c0-.221.18-.4.4-.4H10'
		/>
	</svg>
);
export default SvgAlbum;
