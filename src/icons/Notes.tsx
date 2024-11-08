import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNotes = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={17}
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
			d='M5.333 10.333h5.334M5.333 7.667h1.334M5.333 13H8M6.667 3H4c-.736 0-1.333.597-1.333 1.333v10c0 .737.597 1.334 1.333 1.334h8c.736 0 1.333-.597 1.333-1.334v-10C13.333 3.597 12.736 3 12 3H9.667m-3 0V1.667m0 1.333v1.333'
		/>
	</svg>
);
export default SvgNotes;
