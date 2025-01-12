import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOffTag = ({
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
			d='M1.66675 10V6C1.66675 3.79086 3.45761 2 5.66675 2H12.3334C14.5425 2 16.3334 3.79086 16.3334 6V10C16.3334 12.2091 14.5425 14 12.3334 14H5.66675C3.45761 14 1.66675 12.2091 1.66675 10Z'
			stroke='currentColor'
		/>
		<path
			d='M5.66675 6C6.77131 6 7.66675 6.8954 7.66675 8C7.66675 9.1046 6.77131 10 5.66675 10C4.56218 10 3.66675 9.1046 3.66675 8C3.66675 6.8954 4.56218 6 5.66675 6Z'
			stroke='currentColor'
		/>
		<path
			d='M9 10V6H11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3333 10V6H14.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 8H10.7143'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3335 8H14.0478'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgOffTag;
