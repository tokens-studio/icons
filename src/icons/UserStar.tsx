import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserStar = ({
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
			d='M8 8a2.667 2.667 0 1 0 0-5.333A2.667 2.667 0 0 0 8 8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.333 13.333v-.666A4.667 4.667 0 0 1 10 8.449M11.09 10.943l.693-1.468a.238.238 0 0 1 .434 0l.693 1.468 1.55.237c.198.03.277.286.133.433l-1.12 1.143.264 1.614c.034.207-.174.365-.352.267L12 13.874l-1.385.763c-.178.098-.386-.06-.352-.268l.265-1.614-1.121-1.142c-.144-.147-.065-.402.134-.433z'
		/>
	</svg>
);
export default SvgUserStar;
