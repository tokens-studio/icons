import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPanoramaReduce = ({
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
			d='M14 4.575v6.85a.41.41 0 0 1-.54.386c-1.096-.367-3.628-1.144-5.46-1.144s-4.364.777-5.46 1.145a.41.41 0 0 1-.54-.387v-6.85a.41.41 0 0 1 .54-.386C3.637 4.556 6.169 5.333 8 5.333s4.364-.777 5.46-1.144a.41.41 0 0 1 .54.386'
		/>
	</svg>
);
export default SvgPanoramaReduce;
