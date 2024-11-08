import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGas = ({
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
			d='M6 5.333a2 2 0 1 1 4 0v8.934a.4.4 0 0 1-.4.4H6.4a.4.4 0 0 1-.4-.4zM6 7.333h4M8 3.333v-2m0 0h-.667m.667 0h.667'
		/>
	</svg>
);
export default SvgGas;
