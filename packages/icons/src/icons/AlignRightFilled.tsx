import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignRightFilled = ({
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
			d='M19 21V3C19 2.44772 19.4477 2 20 2C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22C19.4477 22 19 21.5523 19 21Z'
			fill='currentColor'
		/>
		<path
			d='M15.25 13.5C16.2165 13.5 17 14.2835 17 15.25V16.25C17 17.2165 16.2165 18 15.25 18H5.25C4.2835 18 3.5 17.2165 3.5 16.25V15.25C3.5 14.2835 4.2835 13.5 5.25 13.5H15.25Z'
			fill='currentColor'
		/>
		<path
			d='M15.25 6C16.2165 6 17 6.7835 17 7.75V8.75C17 9.7165 16.2165 10.5 15.25 10.5H11.25C10.2835 10.5 9.5 9.7165 9.5 8.75V7.75C9.5 6.7835 10.2835 6 11.25 6H15.25Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgAlignRightFilled;
