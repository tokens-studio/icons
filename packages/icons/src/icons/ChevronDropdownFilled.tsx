import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChevronDropdownFilled = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M15.6127 9.58886C16.1159 9.08789 16.9301 9.08961 17.431 9.59277C17.932 10.096 17.9303 10.9101 17.4271 11.4111L12.9066 15.9111C12.4052 16.4101 11.5948 16.4108 11.0932 15.9121L6.56874 11.4121L6.47987 11.3144C6.0666 10.8107 6.09382 10.0658 6.56288 9.59375C7.03222 9.12181 7.77746 9.08974 8.28358 9.5L8.38124 9.58789L11.9994 13.1855L15.6127 9.58886Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgChevronDropdownFilled;
