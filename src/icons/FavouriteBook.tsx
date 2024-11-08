import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFavouriteBook = ({
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
			d='M2.667 12.667V3.333C2.667 2.597 3.264 2 4 2h8.933c.221 0 .4.18.4.4v8.743'
		/>
		<path
			stroke='currentColor'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 5.853c0 .401-.159.786-.441 1.071-.651.656-1.283 1.34-1.958 1.972a.4.4 0 0 1-.548-.011l-1.946-1.96a1.52 1.52 0 0 1 0-2.143 1.52 1.52 0 0 1 2.155 0l.07.071.072-.07a1.518 1.518 0 0 1 2.596 1.07Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M4 11.333h9.333M4 14h9.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4 14a1.333 1.333 0 0 1 0-2.667'
		/>
	</svg>
);
export default SvgFavouriteBook;
