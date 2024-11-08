import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMoreHoriz = ({
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
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M13.333 8.333a.333.333 0 1 0 0-.667.333.333 0 0 0 0 .667M8 8.333a.333.333 0 1 0 0-.666.333.333 0 0 0 0 .666M2.667 8.333a.333.333 0 1 0 0-.666.333.333 0 0 0 0 .666'
		/>
	</svg>
);
export default SvgMoreHoriz;
