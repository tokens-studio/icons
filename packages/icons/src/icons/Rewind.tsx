import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRewind = ({
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
			d='M14.0294 3.80294C14.2934 3.60834 14.6666 3.7969 14.6666 4.12496V11.8751C14.6666 12.2032 14.2934 12.3917 14.0294 12.1971L8.7703 8.32203C8.55337 8.16216 8.55337 7.8379 8.7703 7.67803L14.0294 3.80294Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.69605 3.80294C6.96012 3.60834 7.33332 3.7969 7.33332 4.12496V11.8751C7.33332 12.2032 6.96012 12.3917 6.69605 12.1971L1.43702 8.32203C1.22005 8.16216 1.22005 7.8379 1.43702 7.67803L6.69605 3.80294Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgRewind;
