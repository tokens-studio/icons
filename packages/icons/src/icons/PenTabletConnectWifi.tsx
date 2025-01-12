import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPenTabletConnectWifi = ({
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
			d='M11.3333 10.34L11.34 10.3326'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 7.99994C9.66667 6.00001 13 6.00001 14.6667 8.00001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33331 9.33337C10.3333 8.00004 12.3333 8.00004 13.3333 9.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 4.66667V3.33333C14.6666 2.59695 14.0697 2 13.3333 2H2.66665C1.93027 2 1.33331 2.59695 1.33331 3.33333V12.6667C1.33331 13.4031 1.93027 14 2.66665 14H13.3333C14.0697 14 14.6666 13.4031 14.6666 12.6667V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M1.33331 8H3.99998' stroke='currentColor' />
		<path d='M4 2V14' stroke='currentColor' />
	</svg>
);
export default SvgPenTabletConnectWifi;
