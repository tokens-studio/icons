import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgForward = ({
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
			d='M1.97065 3.80294C1.70655 3.60834 1.33337 3.7969 1.33337 4.12496V11.8751C1.33337 12.2032 1.70655 12.3917 1.97065 12.1971L7.22971 8.32203C7.44664 8.16216 7.44664 7.8379 7.22971 7.67803L1.97065 3.80294Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.30389 3.80294C9.03983 3.60834 8.66663 3.7969 8.66663 4.12496V11.8751C8.66663 12.2032 9.03983 12.3917 9.30389 12.1971L14.563 8.32203C14.7799 8.16216 14.7799 7.8379 14.563 7.67803L9.30389 3.80294Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgForward;
