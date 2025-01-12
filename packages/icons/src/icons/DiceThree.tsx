import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDiceThree = ({
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
			d='M5.00008 5.33335C4.81599 5.33335 4.66675 5.18411 4.66675 5.00002C4.66675 4.81593 4.81599 4.66669 5.00008 4.66669C5.18417 4.66669 5.33341 4.81593 5.33341 5.00002C5.33341 5.18411 5.18417 5.33335 5.00008 5.33335Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 8.33335C7.81601 8.33335 7.66675 8.18409 7.66675 8.00002C7.66675 7.81595 7.81601 7.66669 8.00008 7.66669C8.18415 7.66669 8.33341 7.81595 8.33341 8.00002C8.33341 8.18409 8.18415 8.33335 8.00008 8.33335Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.0001 11.3334C10.816 11.3334 10.6667 11.1841 10.6667 11C10.6667 10.816 10.816 10.6667 11.0001 10.6667C11.1841 10.6667 11.3334 10.816 11.3334 11C11.3334 11.1841 11.1841 11.3334 11.0001 11.3334Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDiceThree;
