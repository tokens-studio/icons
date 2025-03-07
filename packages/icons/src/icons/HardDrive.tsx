import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHardDrive = ({
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
			d='M6.66666 11.34L6.67332 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 11.34L4.00667 11.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33334 8.66667V13.6C1.33334 13.8209 1.51243 14 1.73334 14H14.2667C14.4876 14 14.6667 13.8209 14.6667 13.6V8.66667M1.33334 8.66667H14.6667M1.33334 8.66667L3.24782 2.28506C3.29858 2.11587 3.45431 2 3.63096 2H12.3691C12.5457 2 12.7014 2.11587 12.7522 2.28506L14.6667 8.66667'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgHardDrive;
