import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDragHandGesture = ({
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
			d='M4.6667 6.99998L3.33064 8.78138C2.94566 9.29471 2.98088 10.0094 3.41443 10.4824L5.93703 13.2343C6.18958 13.5098 6.54554 13.6666 6.9193 13.6666C7.64343 13.6666 8.8277 13.6666 10 13.6666C11.6 13.6666 12.6667 12.6666 12.6667 11C12.6667 11 12.6667 6.42856 12.6667 5.28571'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 5.66664C10.6667 5.66664 10.6667 5.58322 10.6667 5.28568C10.6667 3.76187 12.6667 3.76187 12.6667 5.28568'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66675 5.66674C8.66675 5.66674 8.66675 5.27987 8.66675 4.68479M8.66675 4.68479C8.66675 4.53602 8.66675 4.33341 8.66675 4.33341M8.66675 4.68479C8.66675 3.16098 10.6667 3.16098 10.6667 4.68479C10.6667 4.83356 10.6667 5.13701 10.6667 5.28579C10.6667 5.58333 10.6667 5.66674 10.6667 5.66674'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66675 5.66674C8.66675 5.66674 8.66675 5.27987 8.66675 4.68479C8.66675 3.16098 10.6667 3.16098 10.6667 4.68479C10.6667 4.83356 10.6667 5.13701 10.6667 5.28579C10.6667 5.58333 10.6667 5.66674 10.6667 5.66674'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66675 5.66668C6.66675 5.66668 6.66675 5.23811 6.66675 4.33335C6.66675 2.80954 8.66675 2.80954 8.66675 4.33335C8.66675 4.33335 8.66675 4.53596 8.66675 4.68473C8.66675 5.27981 8.66675 5.66668 8.66675 5.66668'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 9.00007V4.33337C4.66675 3.78109 5.11446 3.33337 5.66675 3.33337C6.21903 3.33337 6.66675 3.70351 6.66675 4.25579C6.66675 4.28101 6.66675 4.30687 6.66675 4.33337C6.66675 5.23814 6.66675 5.66671 6.66675 5.66671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDragHandGesture;
