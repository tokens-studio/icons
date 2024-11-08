import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUnjoin3D = ({
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
			d='M7.667 4.667 6 8h4l-1.667 3.333M13.893 13.893h-2.357m2.357 0v-2.357m0 2.357-2.56-2.56M1.845 1.845h2.357m-2.357 0v2.357m0-2.357 2.56 2.56'
		/>
	</svg>
);
export default SvgUnjoin3D;
