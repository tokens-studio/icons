import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShoppingBagArrowUp = ({
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
			d='M11 13.9999H12.4459C13.263 13.9999 13.8879 13.2715 13.7637 12.4639L12.8406 6.46385C12.7405 5.8134 12.1809 5.33325 11.5228 5.33325H4.47723C3.81914 5.33325 3.25947 5.8134 3.1594 6.46385L2.23633 12.4639C2.11207 13.2715 2.73697 13.9999 3.55415 13.9999H5.00001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 12.6667V8M8 8L10 10M8 8L6 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33334 3.33333C9.33334 2.59695 8.7364 2 8.00001 2C7.26361 2 6.66667 2.59695 6.66667 3.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShoppingBagArrowUp;
