import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFxTag = ({
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
			d='M1.333 10V6a4 4 0 0 1 4-4h5.334a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4 10V6h3.333M4 8h2.381M8.667 10l1.666-2m0 0L12 6m-1.667 2L8.667 6m1.666 2L12 10'
		/>
	</svg>
);
export default SvgFxTag;
