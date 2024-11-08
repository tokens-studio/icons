import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCubeReplaceFace = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
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
			d='M13.667 10v3.435a.4.4 0 0 1-.202.347L9.198 16.22a.4.4 0 0 1-.397 0l-4.266-2.438a.4.4 0 0 1-.202-.347V9.667M9 16v-3.667M16.333 6.333l-8-4.666M9.667 11l-8-4.667M1.667 6.333C3.667 3 6.333 5 8.333 1.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.667 11c2-3.333 4.666-1.333 6.666-4.667'
		/>
	</svg>
);
export default SvgCubeReplaceFace;
