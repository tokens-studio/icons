import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSendMail = ({
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
		<g clipPath='url(#clip0_1_1726)'>
			<path
				d='M6 6L9 8L12 6'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2 9H3.33333'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M0.666626 7H3.33329'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.33337 5.00004V4.66671C3.33337 3.93033 3.93033 3.33337 4.66671 3.33337H13.3334C14.0698 3.33337 14.6667 3.93033 14.6667 4.66671V11.3334C14.6667 12.0698 14.0698 12.6667 13.3334 12.6667H4.66671C3.93033 12.6667 3.33337 12.0698 3.33337 11.3334V11'
				stroke='currentColor'
				strokeLinecap='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_1726'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgSendMail;
