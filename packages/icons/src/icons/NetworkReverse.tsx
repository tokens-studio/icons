import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNetworkReverse = ({
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
			d='M6.26667 14.6666H2.4C2.17909 14.6666 2 14.4875 2 14.2666V11.7333C2 11.5124 2.17909 11.3333 2.4 11.3333H6.26667C6.48758 11.3333 6.66667 11.5124 6.66667 11.7333V14.2666C6.66667 14.4875 6.48758 14.6666 6.26667 14.6666Z'
			stroke='currentColor'
		/>
		<path
			d='M9.93329 4.66663H6.06663C5.84571 4.66663 5.66663 4.48754 5.66663 4.26663V1.73329C5.66663 1.51238 5.84571 1.33329 6.06663 1.33329H9.93329C10.1542 1.33329 10.3333 1.51238 10.3333 1.73329V4.26663C10.3333 4.48754 10.1542 4.66663 9.93329 4.66663Z'
			stroke='currentColor'
		/>
		<path
			d='M13.6 14.6666H9.73337C9.51246 14.6666 9.33337 14.4875 9.33337 14.2666V11.7333C9.33337 11.5124 9.51246 11.3333 9.73337 11.3333H13.6C13.821 11.3333 14 11.5124 14 11.7333V14.2666C14 14.4875 13.821 14.6666 13.6 14.6666Z'
			stroke='currentColor'
		/>
		<path
			d='M4.33337 11.3333V8.99996C4.33337 8.26356 4.93033 7.66663 5.66671 7.66663H10.3334C11.0698 7.66663 11.6667 8.26356 11.6667 8.99996V11.3333'
			stroke='currentColor'
		/>
		<path d='M8 7.66663V4.66663' stroke='currentColor' />
	</svg>
);
export default SvgNetworkReverse;
