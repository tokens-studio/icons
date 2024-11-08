import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgConsumable = ({
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
			d='M14.669 2v2.998c0 .185-.15.335-.336.335a.35.35 0 0 1-.31-.2 6.667 6.667 0 0 0-12.655 2.2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.333 6.667V10c0 .736-.597 1.333-1.333 1.333H6A1.333 1.333 0 0 1 4.667 10V6.667c0-.737.597-1.334 1.333-1.334h4c.736 0 1.333.597 1.333 1.334M8 7.333v-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.367 14v-2.998c0-.185.15-.335.336-.335.133 0 .253.079.31.2a6.667 6.667 0 0 0 12.655-2.2'
		/>
	</svg>
);
export default SvgConsumable;
