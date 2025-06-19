import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCalculator = ({
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
		<g clipPath='url(#clip0_1_6901)'>
			<path
				d='M0.666687 14V1.99999C0.666687 1.26361 1.26364 0.666656 2.00002 0.666656H14C14.7364 0.666656 15.3334 1.26361 15.3334 1.99999V14C15.3334 14.7364 14.7364 15.3333 14 15.3333H2.00002C1.26364 15.3333 0.666687 14.7364 0.666687 14Z'
				stroke='currentColor'
			/>
			<path
				d='M10 4.66666H11.3333H12.6667'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10 10.3333H11.3333H12.6667'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M10 12.3333H11.3333H12.6667'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.33331 4.66668H4.66665M4.66665 4.66668H5.99998M4.66665 4.66668V3.33334M4.66665 4.66668V6.00001'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M3.72406 12.2761L4.66687 11.3333M4.66687 11.3333L5.60968 10.3905M4.66687 11.3333L3.72406 10.3905M4.66687 11.3333L5.60968 12.2761'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_6901'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgCalculator;
