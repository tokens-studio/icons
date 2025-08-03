import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDistributeVerticalFilled = ({
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
			opacity={0.5}
			d='M21 5C21.5523 5 22 4.55228 22 4C22 3.44772 21.5523 3 21 3H3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H21Z'
			fill='currentColor'
		/>
		<path
			d='M17 9.75C17.9665 9.75 18.75 10.5335 18.75 11.5V12.5C18.75 13.4665 17.9665 14.25 17 14.25H7C6.0335 14.25 5.25 13.4665 5.25 12.5V11.5C5.25 10.5335 6.0335 9.75 7 9.75H17Z'
			fill='currentColor'
		/>
		<path
			opacity={0.5}
			d='M21 21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H3C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgDistributeVerticalFilled;
