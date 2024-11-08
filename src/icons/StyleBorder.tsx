import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgStyleBorder = ({
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
			strokeDasharray='2 2'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.499}
			d='M10.667 1.333H5.333a4 4 0 0 0-4 4v5.334a4 4 0 0 0 4 4h5.334a4 4 0 0 0 4-4V5.333a4 4 0 0 0-4-4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.499}
			d='M10.667 3.333H5.333a2 2 0 0 0-2 2v5.334a2 2 0 0 0 2 2h5.334a2 2 0 0 0 2-2V5.333a2 2 0 0 0-2-2'
		/>
	</svg>
);
export default SvgStyleBorder;
