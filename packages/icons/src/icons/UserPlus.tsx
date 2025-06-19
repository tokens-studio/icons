import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserPlus = ({
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
		<g clipPath='url(#clip0_1_496)'>
			<path
				d='M11.3333 6.66675H13.3333M13.3333 6.66675H15.3333M13.3333 6.66675V4.66675M13.3333 6.66675V8.66675'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M0.666687 13.3333V12.6667C0.666687 10.0893 2.75603 8 5.33335 8C7.91069 8 10 10.0893 10 12.6667V13.3333'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M5.33335 8.00008C6.80609 8.00008 8.00002 6.80615 8.00002 5.33341C8.00002 3.86065 6.80609 2.66675 5.33335 2.66675C3.86059 2.66675 2.66669 3.86065 2.66669 5.33341C2.66669 6.80615 3.86059 8.00008 5.33335 8.00008Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_496'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgUserPlus;
