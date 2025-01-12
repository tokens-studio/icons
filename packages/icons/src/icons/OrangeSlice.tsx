import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOrangeSlice = ({
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
			d='M7.07501 6.74061L12.2604 1.55518C15.1243 4.41902 15.1243 9.06221 12.2604 11.9261C9.39661 14.7899 4.75337 14.7899 1.88953 11.9261L7.07501 6.74061ZM7.07501 6.74061L6.83927 12.1618M7.07501 6.74061H12.2604M7.07501 6.74061L10.6105 10.2761'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgOrangeSlice;
