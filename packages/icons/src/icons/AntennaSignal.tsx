import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAntennaSignal = ({
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
		<g clipPath='url(#clip0_1_7848)'>
			<path
				d='M11.6667 5.33333C11.6667 5.33333 12.6667 6.33333 12.6667 7.99999C12.6667 9.66666 11.6667 10.6667 11.6667 10.6667'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M13.6667 3.33333C13.6667 3.33333 15.3334 4.99999 15.3334 8C15.3334 11 13.6667 12.6667 13.6667 12.6667'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M4.33325 5.33333C4.33325 5.33333 3.33325 6.33333 3.33325 7.99999C3.33325 9.66666 4.33325 10.6667 4.33325 10.6667'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2.33341 3.33333C2.33341 3.33333 0.666748 4.99999 0.666748 8C0.666748 11 2.33341 12.6667 2.33341 12.6667'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.99992 8.66666C8.36812 8.66666 8.66659 8.36819 8.66659 7.99999C8.66659 7.63179 8.36812 7.33333 7.99992 7.33333C7.63172 7.33333 7.33325 7.63179 7.33325 7.99999C7.33325 8.36819 7.63172 8.66666 7.99992 8.66666Z'
				fill='currentColor'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_7848'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgAntennaSignal;
