import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNetworkRight = ({
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
			d='M14.6666 9.73333V13.6C14.6666 13.8209 14.4875 14 14.2666 14H11.7333C11.5124 14 11.3333 13.8209 11.3333 13.6V9.73333C11.3333 9.51242 11.5124 9.33333 11.7333 9.33333H14.2666C14.4875 9.33333 14.6666 9.51242 14.6666 9.73333Z'
			stroke='currentColor'
		/>
		<path
			d='M4.66663 6.06671V9.93337C4.66663 10.1543 4.48754 10.3334 4.26663 10.3334H1.73329C1.51238 10.3334 1.33329 10.1543 1.33329 9.93337V6.06671C1.33329 5.84579 1.51238 5.66671 1.73329 5.66671H4.26663C4.48754 5.66671 4.66663 5.84579 4.66663 6.06671Z'
			stroke='currentColor'
		/>
		<path
			d='M14.6666 2.39996V6.26663C14.6666 6.48754 14.4875 6.66663 14.2666 6.66663H11.7333C11.5124 6.66663 11.3333 6.48754 11.3333 6.26663V2.39996C11.3333 2.17905 11.5124 1.99996 11.7333 1.99996H14.2666C14.4875 1.99996 14.6666 2.17905 14.6666 2.39996Z'
			stroke='currentColor'
		/>
		<path
			d='M11.3333 11.6667H8.99996C8.26356 11.6667 7.66663 11.0698 7.66663 10.3334V5.66671C7.66663 4.93033 8.26356 4.33337 8.99996 4.33337H11.3333'
			stroke='currentColor'
		/>
		<path d='M7.66663 8H4.66663' stroke='currentColor' />
	</svg>
);
export default SvgNetworkRight;
