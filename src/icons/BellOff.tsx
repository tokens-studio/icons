import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBellOff = ({
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
			d='M4.18 4.333C4.062 4.74 4 5.167 4 5.6 4 10.578 2 12 2 12h10M5.172 2.583c.75-.8 1.767-1.25 2.828-1.25s2.078.45 2.829 1.25C11.579 3.383 12 4.468 12 5.6c0 4.978 2 6.4 2 6.4M9.153 14a1.332 1.332 0 0 1-2.306 0M2 2l12 12'
		/>
	</svg>
);
export default SvgBellOff;
