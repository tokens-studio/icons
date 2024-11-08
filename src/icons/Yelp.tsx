import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgYelp = ({
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
			d='M7.667 7.333 7.36 1.84a.4.4 0 0 0-.514-.36l-2.304.69a.4.4 0 0 0-.208.62zM9.333 8.333l3.046-.553a.4.4 0 0 0 .254-.626l-.963-1.349a.4.4 0 0 0-.658.01zM9.667 10.667l1.377 2.754a.4.4 0 0 0 .678.061l1.223-1.63a.4.4 0 0 0-.248-.634zM7.667 11l-2.228 2.227a.4.4 0 0 0 .143.658l1.544.579a.4.4 0 0 0 .54-.375zM6.333 9.333 3.58 7.956A.4.4 0 0 0 3 8.314v1.762a.4.4 0 0 0 .549.371z'
		/>
	</svg>
);
export default SvgYelp;
