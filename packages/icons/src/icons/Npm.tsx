import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNpm = ({
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
		<g clipPath='url(#clip0_1_3043)'>
			<path
				d='M0.666626 5.33337H15.3333V10H7.33329V11.3334H4.99996V10H0.666626V5.33337Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M5 5.33337V10'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M9 5.33337V10'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path d='M12 7.33337V10' stroke='currentColor' strokeLinecap='round' />
			<path
				d='M3.33337 7.33337V10'
				stroke='currentColor'
				strokeLinecap='round'
			/>
			<path
				d='M7.33337 7.33337V8.00004'
				stroke='currentColor'
				strokeLinecap='round'
			/>
			<path
				d='M13.6666 7.33337V10'
				stroke='currentColor'
				strokeLinecap='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_3043'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgNpm;
