import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCreativeCommons = ({
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
			d='M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.00004 6.11381C6.79151 6.0401 6.56713 6 6.33337 6C5.22881 6 4.33337 6.8954 4.33337 8C4.33337 9.1046 5.22881 10 6.33337 10C6.56713 10 6.79151 9.95987 7.00004 9.8862'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.1667 6.11381C10.9581 6.0401 10.7337 6 10.5 6C9.3954 6 8.5 6.8954 8.5 8C8.5 9.1046 9.3954 10 10.5 10C10.7337 10 10.9581 9.95987 11.1667 9.8862'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCreativeCommons;
