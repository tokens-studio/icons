import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCommunity = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M5.667 12v-.667a3.333 3.333 0 0 1 6.666 0V12M1.667 12v-.667a2 2 0 0 1 2-2M16.333 12v-.667a2 2 0 0 0-2-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M3.667 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666M14.333 9.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666'
		/>
	</svg>
);
export default SvgCommunity;
