import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMusicDoubleNote = ({
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
			d='M13.333 9.333V2L6 3.333v7.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.333 12.667H12c.736 0 1.333-.597 1.333-1.334v-2h-2c-.736 0-1.333.597-1.333 1.334v.666c0 .737.597 1.334 1.333 1.334M4 14h.667C5.403 14 6 13.403 6 12.667v-2H4c-.736 0-1.333.597-1.333 1.333v.667C2.667 13.403 3.264 14 4 14'
		/>
	</svg>
);
export default SvgMusicDoubleNote;
