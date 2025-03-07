import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBirthdayCake = ({
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
			d='M2.66675 11V13.3333C2.66675 14.0697 3.2637 14.6667 4.00008 14.6667H12.0001C12.7365 14.6667 13.3334 14.0697 13.3334 13.3333V11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 9.33334V8.66668C2 7.93028 2.59695 7.33334 3.33333 7.33334H12.6667C13.4031 7.33334 14 7.93028 14 8.66668V9.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 5.33334V7.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 5.33334C8.84168 5.33334 9.33341 4.68791 9.33341 3.58334C9.33341 2.47878 8.00008 1.33334 8.00008 1.33334C8.00008 1.33334 6.66675 2.47878 6.66675 3.58334C6.66675 4.68791 7.15848 5.33334 8.00008 5.33334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 9.33334C6 10.4379 5.10457 11.3333 4 11.3333C2.89543 11.3333 2 10.4379 2 9.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 9.33334C10 10.4379 9.1046 11.3333 8 11.3333C6.8954 11.3333 6 10.4379 6 9.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 9.33334C14 10.4379 13.1046 11.3333 12 11.3333C10.8954 11.3333 10 10.4379 10 9.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBirthdayCake;
