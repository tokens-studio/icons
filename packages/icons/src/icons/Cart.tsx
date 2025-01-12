import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCart = ({
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
			d='M13 14.6667C13.5523 14.6667 14 14.2189 14 13.6667C14 13.1144 13.5523 12.6667 13 12.6667C12.4477 12.6667 12 13.1144 12 13.6667C12 14.2189 12.4477 14.6667 13 14.6667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33325 14.6667C6.88552 14.6667 7.33325 14.2189 7.33325 13.6667C7.33325 13.1144 6.88552 12.6667 6.33325 12.6667C5.78097 12.6667 5.33325 13.1144 5.33325 13.6667C5.33325 14.2189 5.78097 14.6667 6.33325 14.6667Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33325 2.66668H14.6666L13.3333 10H4.66659L3.33325 2.66668ZM3.33325 2.66668C3.22214 2.22223 2.66659 1.33334 1.33325 1.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3334 10H4.66675H3.48726C2.29772 10 1.66675 10.5208 1.66675 11.3333C1.66675 12.1459 2.29772 12.6667 3.48726 12.6667H13.0001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCart;
