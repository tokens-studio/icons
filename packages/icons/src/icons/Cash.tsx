import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCash = ({
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
			d='M1.33325 11.3333V4.66668C1.33325 3.9303 1.93021 3.33334 2.66659 3.33334H6.66658H9.33325H13.3333C14.0697 3.33334 14.6666 3.9303 14.6666 4.66668V11.3333C14.6666 12.0697 14.0697 12.6667 13.3333 12.6667H9.33325H6.66658H2.66659C1.93021 12.6667 1.33325 12.0697 1.33325 11.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 10C6.8954 10 6 9.1046 6 8C6 6.8954 6.8954 6 8 6C9.1046 6 10 6.8954 10 8C10 9.1046 9.1046 10 8 10Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3333 8.00667L12.3399 7.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66675 8.00667L3.67341 7.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCash;
