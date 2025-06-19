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
		<g clipPath='url(#clip0_1_2960)'>
			<path
				d='M0.666748 10V6C0.666748 3.79086 2.45761 2 4.66675 2H11.3334C13.5425 2 15.3334 3.79086 15.3334 6V10C15.3334 12.2091 13.5425 14 11.3334 14H4.66675C2.45761 14 0.666748 12.2091 0.666748 10Z'
				stroke='currentColor'
			/>
			<path
				d='M4.66675 6C5.77131 6 6.66675 6.8954 6.66675 8C6.66675 9.1046 5.77131 10 4.66675 10C3.56218 10 2.66675 9.1046 2.66675 8C2.66675 6.8954 3.56218 6 4.66675 6Z'
				stroke='currentColor'
			/>
			<path
				d='M8 10V6H10'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M11.3333 10V6H13.3333'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M8 8H9.71427'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M11.3335 8H13.0478'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_2960'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgOffTag;
