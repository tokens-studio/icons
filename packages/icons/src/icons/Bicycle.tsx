import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBicycle = ({
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
			d='M4.33341 12.6667C5.80617 12.6667 7.00008 11.4727 7.00008 10C7.00008 8.52728 5.80617 7.33334 4.33341 7.33334C2.86065 7.33334 1.66675 8.52728 1.66675 10C1.66675 11.4727 2.86065 12.6667 4.33341 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66675 5H10.6667M10.6667 5H11.0001L13.6667 10M10.6667 5L12.0001 3M12.0001 3H10.3334M12.0001 3H13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33325 10L6.66659 5L8.99992 9.33333H10.9999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66659 5C6.44437 4.33333 5.66659 3 4.33325 3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.6667 12.6667C15.1394 12.6667 16.3333 11.4727 16.3333 10C16.3333 8.52728 15.1394 7.33334 13.6667 7.33334C12.1939 7.33334 11 8.52728 11 10C11 11.4727 12.1939 12.6667 13.6667 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBicycle;
