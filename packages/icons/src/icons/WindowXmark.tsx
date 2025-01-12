import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWindowXmark = ({
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
			d='M10 14H2.66671C1.93033 14 1.33337 13.4031 1.33337 12.6667V3.33333C1.33337 2.59695 1.93033 2 2.66671 2H13.3334C14.0698 2 14.6667 2.59695 14.6667 3.33333V10'
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
			d='M12 14.8284L13.4142 13.4142M13.4142 13.4142L14.8284 12M13.4142 13.4142L12 12M13.4142 13.4142L14.8284 14.8284'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWindowXmark;
