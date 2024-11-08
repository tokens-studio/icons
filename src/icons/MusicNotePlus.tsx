import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMusicNotePlus = ({
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
			d='M10.667 6.667h2m0 0h2m-2 0v-2m0 2v2M4.667 10.667v2c0 .736-.597 1.333-1.334 1.333h-.666a1.333 1.333 0 0 1-1.334-1.333V12c0-.736.597-1.333 1.334-1.333zm0 0V5.333m0 0V2.667L8 2v2.667z'
		/>
	</svg>
);
export default SvgMusicNotePlus;
