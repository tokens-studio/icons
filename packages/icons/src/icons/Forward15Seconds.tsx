import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgForward15Seconds = ({
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
			d='M14 8.66669C14 11.9804 11.3137 14.6667 8 14.6667C4.68629 14.6667 2 11.9804 2 8.66669C2 5.35298 4.68629 2.66669 8 2.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 2.66665H13M13 2.66665L11.6667 1.33331M13 2.66665L11.6667 3.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 6V10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 6H8.66667C8.29847 6 8 6.29848 8 6.66667V7.66667C8 8.03487 8.29847 8.33333 8.66667 8.33333H9.33333C9.70153 8.33333 10 8.6318 10 9V10C10 10.3682 9.70153 10.6667 9.33333 10.6667H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgForward15Seconds;
