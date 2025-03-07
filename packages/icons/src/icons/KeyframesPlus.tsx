import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframesPlus = ({
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
			d='M1.33334 8H3.33334M3.33334 8H5.33334M3.33334 8V6M3.33334 8V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.16666 4.00003L4.32989 3.81349C4.8611 3.20638 5.80554 3.20638 6.33676 3.81348L9.23172 7.12203C9.67159 7.6247 9.67159 8.37537 9.23172 8.87803L6.33676 12.1866C5.80554 12.7937 4.8611 12.7937 4.32989 12.1866L4.16666 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66666 12.6667L11.9229 8.86777C12.3509 8.36844 12.3509 7.63164 11.9229 7.13231L8.66666 3.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 12.6667L14.5896 8.86777C15.0175 8.36844 15.0175 7.63164 14.5896 7.13231L11.3333 3.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgKeyframesPlus;
