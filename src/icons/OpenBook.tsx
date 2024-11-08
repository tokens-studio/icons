import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOpenBook = ({
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
			strokeWidth={1.5}
			d='M8 14V4.667c0-.737.597-1.334 1.333-1.334h4.934c.22 0 .4.18.4.4v8.743M8 14V4.667c0-.737-.597-1.334-1.333-1.334H1.733a.4.4 0 0 0-.4.4v8.743M9.333 12.667h5.334M6.667 12.667H1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 14c0-.736.597-1.333 1.333-1.333M8 14c0-.736-.597-1.333-1.333-1.333'
		/>
	</svg>
);
export default SvgOpenBook;
