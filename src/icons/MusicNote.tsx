import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMusicNote = ({
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
			d='M8 10.667v2C8 13.403 7.403 14 6.667 14H6a1.333 1.333 0 0 1-1.333-1.333V12c0-.736.597-1.333 1.333-1.333zm0 0V5.333m0 0V2.667L11.333 2v2.667z'
		/>
	</svg>
);
export default SvgMusicNote;
