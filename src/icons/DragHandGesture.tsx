import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDragHandGesture = ({
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
			d='M4.667 7 3.33 8.781a1.33 1.33 0 0 0 .083 1.701l2.523 2.752c.253.276.609.433.982.433H10c1.6 0 2.667-1 2.667-2.667V5.286M10.667 5.667v-.381c0-1.524 2-1.524 2 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 5.667v-.982m0 0v-.352m0 .352c0-1.524 2-1.524 2 0v.982'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 5.667v-.982c0-1.524 2-1.524 2 0v.982M6.667 5.667V4.333c0-1.523 2-1.523 2 0v1.334M4.667 9V4.333a1 1 0 0 1 1-1c.552 0 1 .37 1 .923v1.411'
		/>
	</svg>
);
export default SvgDragHandGesture;
