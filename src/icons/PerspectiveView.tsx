import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPerspectiveView = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M1.667 14 3.762 2h10.476l2.095 12zM2.333 11h13.334M3 8h12M3.667 5h10.666M9 2v12M6.333 2.333l-1 11.334M11.667 2.333l1 11.334'
		/>
	</svg>
);
export default SvgPerspectiveView;
