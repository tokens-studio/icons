import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOrangeSliceAlt = ({
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
			d='M8.92635 6.74061L3.7409 1.55518C0.877056 4.41902 0.877056 9.06221 3.7409 11.9261C6.60475 14.7899 11.2479 14.7899 14.1118 11.9261L8.92635 6.74061ZM8.92635 6.74061L9.16208 12.1618M8.92635 6.74061H3.7409M8.92635 6.74061L5.39082 10.2761'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgOrangeSliceAlt;
