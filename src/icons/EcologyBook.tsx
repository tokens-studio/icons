import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEcologyBook = ({
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
			d='M2.667 12.667V3.333C2.667 2.597 3.264 2 4 2h8.933a.4.4 0 0 1 .4.4v8.743'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.667 9.333s.6-2.078 2-3.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m8.535 8.283-.09.008a2.063 2.063 0 0 1-2.244-1.849 2.04 2.04 0 0 1 1.841-2.233l1.99-.187a.234.234 0 0 1 .255.21l.17 1.72a2.13 2.13 0 0 1-1.922 2.331'
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
export default SvgEcologyBook;
