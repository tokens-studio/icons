import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWindowNoAccess = ({
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
			d='M8.00004 14H2.66671C1.93033 14 1.33337 13.4031 1.33337 12.6667V3.33333C1.33337 2.59695 1.93033 2 2.66671 2H13.3334C14.0698 2 14.6667 2.59695 14.6667 3.33333V8.66667'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M1.33337 4.66675H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33337 3.33993L3.34004 3.33252'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 3.33993L5.34004 3.33252'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 3.33993L7.34004 3.33252'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.9997 10.7C13.5762 10.268 12.9861 10 12.3333 10C11.0447 10 10 11.0447 10 12.3333C10 12.9693 10.2544 13.5458 10.667 13.9667M13.9997 10.7C14.4123 11.1209 14.6667 11.6974 14.6667 12.3333C14.6667 13.622 13.622 14.6667 12.3333 14.6667C11.6806 14.6667 11.0905 14.3987 10.667 13.9667M13.9997 10.7L10.667 13.9667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWindowNoAccess;
