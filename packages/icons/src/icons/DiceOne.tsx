import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDiceOne = ({
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
			d='M8.00008 8.33335C7.81601 8.33335 7.66675 8.18409 7.66675 8.00002C7.66675 7.81595 7.81601 7.66669 8.00008 7.66669C8.18415 7.66669 8.33341 7.81595 8.33341 8.00002C8.33341 8.18409 8.18415 8.33335 8.00008 8.33335Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDiceOne;
