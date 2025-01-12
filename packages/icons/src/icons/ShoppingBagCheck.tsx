import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShoppingBagCheck = ({
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
			d='M13.3333 9.66659L12.8406 6.46384C12.7405 5.8134 12.1809 5.33325 11.5228 5.33325H4.47722C3.81912 5.33325 3.25946 5.8134 3.15938 6.46385L2.23631 12.4639C2.11205 13.2715 2.73696 13.9999 3.55414 13.9999H7.99999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33334 12.6666L11.3333 14.6666L14.6667 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33332 3.33333C9.33332 2.59695 8.73639 2 7.99999 2C7.26359 2 6.66666 2.59695 6.66666 3.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShoppingBagCheck;
