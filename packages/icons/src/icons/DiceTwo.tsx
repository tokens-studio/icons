import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDiceTwo = ({
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
			d='M2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4V13.6C14 13.8209 13.8209 14 13.6 14H2.4C2.17909 14 2 13.8209 2 13.6Z'
			stroke='currentColor'
		/>
		<path
			d='M5.00001 5.33335C4.81591 5.33335 4.66667 5.18411 4.66667 5.00002C4.66667 4.81593 4.81591 4.66669 5.00001 4.66669C5.1841 4.66669 5.33334 4.81593 5.33334 5.00002C5.33334 5.18411 5.1841 5.33335 5.00001 5.33335Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 11.3334C10.8159 11.3334 10.6667 11.1841 10.6667 11C10.6667 10.816 10.8159 10.6667 11 10.6667C11.1841 10.6667 11.3333 10.816 11.3333 11C11.3333 11.1841 11.1841 11.3334 11 11.3334Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDiceTwo;
