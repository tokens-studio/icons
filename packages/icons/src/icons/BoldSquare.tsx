import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoldSquare = ({
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
			d='M2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4V13.6C14 13.8209 13.8209 14 13.6 14H2.4C2.17909 14 2 13.8209 2 13.6Z'
			stroke='currentColor'
		/>
		<path
			d='M8 7.99999H6M8 7.99999C8 7.99999 9.66667 7.99999 9.66667 6.33332C9.66667 4.66666 8 4.66666 8 4.66666H6.4C6.17909 4.66666 6 4.84574 6 5.06666V7.99999M8 7.99999C8 7.99999 10 7.99999 10 9.83332C10 11.6667 8 11.6667 8 11.6667H6.4C6.17909 11.6667 6 11.4876 6 11.2667V7.99999'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgBoldSquare;
