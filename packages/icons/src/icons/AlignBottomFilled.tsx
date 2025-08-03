import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignBottomFilled = ({
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
			d='M21 21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H3C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21Z'
			fill='currentColor'
		/>
		<path
			d='M8.75 17C9.7165 17 10.5 16.2165 10.5 15.25V5.25C10.5 4.2835 9.7165 3.5 8.75 3.5H7.75C6.7835 3.5 6 4.2835 6 5.25V15.25L6.00879 15.4287C6.0983 16.3113 6.84383 17 7.75 17H8.75Z'
			fill='currentColor'
		/>
		<path
			d='M16.25 17C17.2165 17 18 16.2165 18 15.25V11.25C18 10.2835 17.2165 9.5 16.25 9.5H15.25C14.2835 9.5 13.5 10.2835 13.5 11.25V15.25L13.5088 15.4287C13.5983 16.3113 14.3438 17 15.25 17H16.25Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgAlignBottomFilled;
