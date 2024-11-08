import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSpades = ({
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
			d='M8 9.667c2 3 6 2.98 6-.334 0-2.666-2.667-4.666-6-8-3.333 3.334-6 5.334-6 8 0 3.314 4 3.334 6 .334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='m7.647 10.328-2 3.75a.4.4 0 0 0 .353.589h4a.4.4 0 0 0 .353-.589l-2-3.75a.4.4 0 0 0-.706 0Z'
		/>
	</svg>
);
export default SvgSpades;
