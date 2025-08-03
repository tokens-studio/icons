import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCheckboxMinusFilled = ({
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
			d='M17.8339 10.5L17.9872 10.5078C18.7434 10.5848 19.3339 11.2234 19.3339 12C19.3339 12.7766 18.7434 13.4152 17.9872 13.4922L17.8339 13.5H6.16687C5.33844 13.5 4.66687 12.8284 4.66687 12C4.66687 11.1716 5.33844 10.5 6.16687 10.5H17.8339Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgCheckboxMinusFilled;
