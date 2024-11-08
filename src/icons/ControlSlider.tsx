import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgControlSlider = ({
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
			strokeWidth={1.5}
			d='m4.503 11.522-.952-6.667a1.333 1.333 0 0 1 1.32-1.522h2.258c.812 0 1.435.719 1.32 1.522l-.952 6.667a1.33 1.33 0 0 1-1.32 1.145h-.354a1.33 1.33 0 0 1-1.32-1.145Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 8H4m10.667 0H8'
		/>
	</svg>
);
export default SvgControlSlider;
