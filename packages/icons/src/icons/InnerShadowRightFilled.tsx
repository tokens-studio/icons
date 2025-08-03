import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgInnerShadowRightFilled = ({
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
			opacity={0.4}
			d='M18 5L18.1025 5.00488C18.6067 5.05621 19 5.48232 19 6V18C19 18.5523 18.5523 19 18 19H16C15.4477 19 15 18.5523 15 18V6L15.0049 5.89746C15.0562 5.39333 15.4823 5 16 5H18Z'
			fill='currentColor'
		/>
		<path
			d='M19 7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7ZM21 17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgInnerShadowRightFilled;
