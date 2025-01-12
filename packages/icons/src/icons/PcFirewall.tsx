import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPcFirewall = ({
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
			d='M4.66675 14.6666H11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 11.3334V2.66671C1.33325 1.93033 1.93021 1.33337 2.66659 1.33337H13.3333C14.0697 1.33337 14.6666 1.93033 14.6666 2.66671V11.3334C14.6666 12.0698 14.0697 12.6667 13.3333 12.6667H2.66659C1.93021 12.6667 1.33325 12.0698 1.33325 11.3334Z'
			stroke='currentColor'
		/>
		<path
			d='M8.32342 4.08083L10.3637 4.5909C10.5417 4.63542 10.6674 4.79762 10.6625 4.9811C10.5451 9.33311 8.00002 9.99998 8.00002 9.99998C8.00002 9.99998 5.45494 9.33311 5.33754 4.9811C5.33259 4.79762 5.45827 4.63542 5.63634 4.5909L7.67662 4.08083C7.88895 4.02775 8.11108 4.02775 8.32342 4.08083Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPcFirewall;
