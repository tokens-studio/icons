import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTransitionUp = ({
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
			d='M12 14.667H4a2 2 0 0 1-2-2v-1.334a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.334a2 2 0 0 1-2 2Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2 5.333V4a2.667 2.667 0 0 1 2.667-2.667h6.666A2.667 2.667 0 0 1 14 4v1.333M8 9.333V4m0 0L6 6m2-2 2 2'
		/>
	</svg>
);
export default SvgTransitionUp;
