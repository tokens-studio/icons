import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVariable = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M3.2 5.33287L8 2.66574L12.8 5.33287V10.666L8 13.3331L3.2 10.666V5.33287ZM8 1.33448L14 4.66782V11.3333L8 14.6667L2 11.3333V4.66666L8 1.33448ZM9.2 7.99653C9.2 8.63502 8.6624 9.15113 8 9.15113C7.3376 9.15113 6.8 8.63502 6.8 7.99653C6.8 7.35919 7.3376 6.84193 8 6.84193C8.6624 6.84193 9.2 7.35919 9.2 7.99653Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgVariable;
