import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgThreeStars = ({
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
			d='m3.09 9.61.693-1.469a.238.238 0 0 1 .434 0l.693 1.47 1.55.236c.198.03.277.286.133.433l-1.12 1.142.264 1.614c.034.207-.174.366-.352.268L4 12.54l-1.385.763c-.178.098-.386-.06-.352-.268l.265-1.614-1.121-1.142c-.144-.147-.065-.403.134-.433zM11.09 9.61l.693-1.469a.238.238 0 0 1 .434 0l.693 1.47 1.55.236c.198.03.277.286.133.433l-1.12 1.142.264 1.614c.034.207-.174.366-.352.268L12 12.54l-1.385.763c-.178.098-.386-.06-.352-.268l.265-1.614-1.121-1.142c-.144-.147-.065-.403.134-.433zM7.09 3.61l.693-1.469a.238.238 0 0 1 .434 0l.693 1.47 1.55.236c.198.03.277.286.133.433l-1.12 1.142.264 1.614c.034.207-.174.365-.352.268L8 6.54l-1.385.763c-.178.097-.386-.06-.352-.268l.265-1.614L5.407 4.28c-.144-.147-.065-.403.134-.433z'
		/>
	</svg>
);
export default SvgThreeStars;
