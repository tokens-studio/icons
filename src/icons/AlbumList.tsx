import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlbumList = ({
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
			d='M1.333 11.6V1.733c0-.22.18-.4.4-.4H11.6a.4.4 0 0 1 .4.4V11.6a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M5.333 14.667h8.934a.4.4 0 0 0 .4-.4V5.333M7.333 8.333a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 0V4.4c0-.22.18-.4.4-.4h.934'
		/>
	</svg>
);
export default SvgAlbumList;
