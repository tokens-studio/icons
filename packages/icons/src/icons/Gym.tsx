import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGym = ({
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
			d='M5.93341 4.66663H4.06675C3.84583 4.66663 3.66675 4.84571 3.66675 5.06663V10.9333C3.66675 11.1542 3.84583 11.3333 4.06675 11.3333H5.93341C6.15433 11.3333 6.33341 11.1542 6.33341 10.9333V5.06663C6.33341 4.84571 6.15433 4.66663 5.93341 4.66663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.9334 4.66663H12.0667C11.8458 4.66663 11.6667 4.84571 11.6667 5.06663V10.9333C11.6667 11.1542 11.8458 11.3333 12.0667 11.3333H13.9334C14.1543 11.3333 14.3334 11.1542 14.3334 10.9333V5.06663C14.3334 4.84571 14.1543 4.66663 13.9334 4.66663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66675 9.6V6.4C1.66675 6.17909 1.84583 6 2.06675 6H3.26675C3.48766 6 3.66675 6.17909 3.66675 6.4V9.6C3.66675 9.82093 3.48766 10 3.26675 10H2.06675C1.84583 10 1.66675 9.82093 1.66675 9.6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16.3333 9.6V6.4C16.3333 6.17909 16.1542 6 15.9333 6H14.7333C14.5123 6 14.3333 6.17909 14.3333 6.4V9.6C14.3333 9.82093 14.5123 10 14.7333 10H15.9333C16.1542 10 16.3333 9.82093 16.3333 9.6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33325 8H11.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGym;
