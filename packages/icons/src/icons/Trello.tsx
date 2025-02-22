import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTrello = ({
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
			d='M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.4031 2.59695 14 3.33333 14H12.6667C13.4031 14 14 13.4031 14 12.6667V3.33333C14 2.59695 13.4031 2 12.6667 2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.93333 4H4.4C4.17909 4 4 4.17909 4 4.4V11.6C4 11.8209 4.17909 12 4.4 12H6.93333C7.15427 12 7.33333 11.8209 7.33333 11.6V4.4C7.33333 4.17909 7.15427 4 6.93333 4Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6 4H9.06669C8.84575 4 8.66669 4.17909 8.66669 4.4V8.93333C8.66669 9.15427 8.84575 9.33333 9.06669 9.33333H11.6C11.821 9.33333 12 9.15427 12 8.93333V4.4C12 4.17909 11.821 4 11.6 4Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTrello;
