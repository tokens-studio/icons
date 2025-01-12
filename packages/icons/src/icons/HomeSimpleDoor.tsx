import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHomeSimpleDoor = ({
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
			d='M6 14H4.66667C3.19391 14 2 12.8061 2 11.3334V7.13842C2 6.20593 2.48707 5.34118 3.28453 4.85788L6.61786 2.83768C7.4674 2.32282 8.5326 2.32282 9.38213 2.83768L12.7155 4.85788C13.5129 5.34118 14 6.20593 14 7.13842V11.3334C14 12.8061 12.8061 14 11.3333 14H10M6 14V11.3334C6 10.2288 6.8954 9.33335 8 9.33335C9.1046 9.33335 10 10.2288 10 11.3334V14M6 14H10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHomeSimpleDoor;
