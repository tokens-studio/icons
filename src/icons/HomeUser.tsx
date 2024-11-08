import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHomeUser = ({
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
			d='M1.667 6.333 8 2.667l6.333 3.666'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M4.667 14v-.667a3.333 3.333 0 0 1 6.666 0V14'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
		/>
	</svg>
);
export default SvgHomeUser;
