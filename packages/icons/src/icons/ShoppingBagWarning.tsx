import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShoppingBagWarning = ({
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
			d='M11.6667 11.3333V12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6667 14.6734L11.6734 14.666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33335 3.33333C9.33335 2.59695 8.73642 2 8.00002 2C7.26362 2 6.66669 2.59695 6.66669 3.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShoppingBagWarning;
