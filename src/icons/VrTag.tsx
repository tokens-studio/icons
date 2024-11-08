import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVrTag = ({
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
			d='M8.667 10.333V8.467m0 0v-2.8h1.905c.476 0 1.428 0 1.428 1.4s-.952 1.4-1.428 1.4m-1.905 0h1.905m0 0L12 10.333M7.333 5.667l-2 4.666-2-4.666'
		/>
	</svg>
);
export default SvgVrTag;
