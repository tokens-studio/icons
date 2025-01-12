import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSearchWindow = ({
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
			d='M8.66668 14H2.66668C1.9303 14 1.33334 13.4031 1.33334 12.6667V3.33333C1.33334 2.59695 1.9303 2 2.66668 2H13.3333C14.0697 2 14.6667 2.59695 14.6667 3.33333V9.33333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M1.33334 4.66663H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33334 3.34005L3.34001 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33334 3.34005L5.34001 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33334 3.34005L7.34001 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.4161 13.4123C13.7769 13.0505 14 12.5513 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C12.5533 14 13.054 13.7753 13.4161 13.4123ZM13.4161 13.4123L14.6667 14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSearchWindow;
