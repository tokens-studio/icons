import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapsArrowDiagonal = ({
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
			d='m2.688 5.945 10.317-2.89c.25-.07.481.161.411.411l-2.889 10.318a.333.333 0 0 1-.626.045L7.736 8.907a.33.33 0 0 0-.171-.17L2.643 6.57a.333.333 0 0 1 .045-.626'
		/>
	</svg>
);
export default SvgMapsArrowDiagonal;
