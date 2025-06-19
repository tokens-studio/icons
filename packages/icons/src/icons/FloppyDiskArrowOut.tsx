import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFloppyDiskArrowOut = ({
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
		<g clipPath='url(#clip0_1_4874)'>
			<path
				d='M2 4.33333V3.33333C2 2.59695 2.59695 2 3.33333 2H10.7811C11.1347 2 11.4738 2.14047 11.7239 2.39053L13.6095 4.27614C13.8595 4.52619 14 4.86533 14 5.21895V12.6667C14 13.4031 13.4031 14 12.6667 14H3.33333C2.59695 14 2 13.4031 2 12.6667V11.6667'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M5.33337 2H10.6667V5.6C10.6667 5.82091 10.4876 6 10.2667 6H5.73337C5.51246 6 5.33337 5.82091 5.33337 5.6V2Z'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M12 14V9.06669C12 8.84575 11.8209 8.66669 11.6 8.66669H10'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M4 14V11.6667'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.99996 8H0.666626M0.666626 8L2.66663 6M0.666626 8L2.66663 10'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_4874'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgFloppyDiskArrowOut;
