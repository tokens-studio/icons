import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShoppingBagPocket = ({
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
			d='M12.8406 6.46385L13.7637 12.4639C13.8879 13.2715 13.263 13.9999 12.4459 13.9999H3.55414C2.73696 13.9999 2.11205 13.2715 2.23631 12.4639L3.15938 6.46385C3.25946 5.8134 3.81912 5.33325 4.47722 5.33325H11.5228C12.1809 5.33325 12.7405 5.8134 12.8406 6.46385Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 7.33325V11.9999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 7.33325V11.9999'
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
export default SvgShoppingBagPocket;
