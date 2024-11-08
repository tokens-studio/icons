import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGarage = ({
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
			d='M4 13.333H2V4l6-1.333L14 4v9.333h-2m-8 0h8m-8 0v-2.666m8 2.666v-2.666m-8 0V8m0 2.667h8m0 0V8M4 8V5.333h8V8M4 8h8'
		/>
	</svg>
);
export default SvgGarage;
