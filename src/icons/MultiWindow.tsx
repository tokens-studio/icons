import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMultiWindow = ({
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
			d='M4.667 12.667V7.333C4.667 6.597 5.264 6 6 6h7.333c.737 0 1.334.597 1.334 1.333v5.334c0 .736-.597 1.333-1.334 1.333H6a1.333 1.333 0 0 1-1.333-1.333Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M4.333 10.667H2.667a1.333 1.333 0 0 1-1.334-1.334V4c0-.736.597-1.333 1.334-1.333H10c.736 0 1.333.597 1.333 1.333v2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.667 8h.666M3.333 4.667H4'
		/>
	</svg>
);
export default SvgMultiWindow;
