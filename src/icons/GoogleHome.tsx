import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGoogleHome = ({
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
			d='M11.806 11.333a6 6 0 1 0-8.944-8 6 6 0 0 0 8.944 8Zm0 0H13a1.667 1.667 0 1 1 0 3.334h-1.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m7.333 7.34.007-.007M5.333 7.34l.007-.007M9.333 7.34l.007-.007'
		/>
	</svg>
);
export default SvgGoogleHome;
