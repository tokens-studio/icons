import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMusicDoubleNotePlus = ({
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
			d='M12.333 4.333h2m0 0h2m-2 0v-2m0 2v2M5 10.667V3.333l5.333-.666M11 9.333V6.667M9 12.667h.667c.736 0 1.333-.597 1.333-1.334v-2H9c-.736 0-1.333.597-1.333 1.334v.666c0 .737.597 1.334 1.333 1.334M3 14h.667C4.403 14 5 13.403 5 12.667v-2H3c-.736 0-1.333.597-1.333 1.333v.667C1.667 13.403 2.264 14 3 14'
		/>
	</svg>
);
export default SvgMusicDoubleNotePlus;
