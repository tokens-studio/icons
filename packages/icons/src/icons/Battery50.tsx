import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBattery50 = ({
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
		<g clipPath='url(#clip0_1_7490)'>
			<path
				d='M15.3334 6.66666V9.33332'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M0.666626 10.6667V5.33333C0.666626 4.59695 1.26358 4 1.99996 4H12C12.7364 4 13.3333 4.59695 13.3333 5.33333V10.6667C13.3333 11.4031 12.7364 12 12 12H1.99996C1.26358 12 0.666626 11.4031 0.666626 10.6667Z'
				stroke='currentColor'
			/>
			<path
				d='M2.66663 9.6V6.4C2.66663 6.17909 2.84571 6 3.06663 6H6.26663C6.48754 6 6.66663 6.17909 6.66663 6.4V9.6C6.66663 9.82093 6.48754 10 6.26663 10H3.06663C2.84571 10 2.66663 9.82093 2.66663 9.6Z'
				stroke='currentColor'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_7490'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgBattery50;
