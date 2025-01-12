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
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M10.6666 1.33325H5.33325C3.12411 1.33325 1.33325 3.12411 1.33325 5.33325V10.6666C1.33325 12.8757 3.12411 14.6666 5.33325 14.6666H10.6666C12.8757 14.6666 14.6666 12.8757 14.6666 10.6666V5.33325C14.6666 3.12411 12.8757 1.33325 10.6666 1.33325Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeDasharray='2 2'
		/>
		<path
			d='M10.6666 3.33325H5.33325C4.22869 3.33325 3.33325 4.22869 3.33325 5.33325V10.6666C3.33325 11.7712 4.22869 12.6666 5.33325 12.6666H10.6666C11.7712 12.6666 12.6666 11.7712 12.6666 10.6666V5.33325C12.6666 4.22869 11.7712 3.33325 10.6666 3.33325Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgStyleBorder;
