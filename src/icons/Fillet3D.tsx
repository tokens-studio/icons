import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFillet3D = ({
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
			d='M1.333 13.333v-2.666a9.333 9.333 0 0 1 9.334-9.334h2.666M13.893 13.893h-2.357m2.357 0v-2.357m0 2.357L12 12'
		/>
		<path
			stroke='currentColor'
			strokeDasharray='2 3'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m6 6 4.667 4.667'
		/>
	</svg>
);
export default SvgFillet3D;
