import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOnTag = ({
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
		<g clipPath='url(#clip0_1_2938)'>
			<path
				d='M0.666748 10V6C0.666748 3.79086 2.45761 2 4.66675 2H11.3334C13.5425 2 15.3334 3.79086 15.3334 6V10C15.3334 12.2091 13.5425 14 11.3334 14H4.66675C2.45761 14 0.666748 12.2091 0.666748 10Z'
				stroke='currentColor'
			/>
			<path
				d='M6 6C7.1046 6 8 6.8954 8 8C8 9.1046 7.1046 10 6 10C4.89543 10 4 9.1046 4 8C4 6.8954 4.89543 6 6 6Z'
				stroke='currentColor'
			/>
			<path
				d='M9.33325 10V6L11.9999 10V6'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_2938'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgOnTag;
