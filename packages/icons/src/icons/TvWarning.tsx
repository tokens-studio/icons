import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTvWarning = ({
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
			d='M8 7.33325V9.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 12.0067L8.00667 11.9993'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 13.3334V6.00008C1.33337 5.2637 1.93033 4.66675 2.66671 4.66675H13.3334C14.0698 4.66675 14.6667 5.2637 14.6667 6.00008V13.3334C14.6667 14.0698 14.0698 14.6667 13.3334 14.6667H2.66671C1.93033 14.6667 1.33337 14.0698 1.33337 13.3334Z'
			stroke='currentColor'
		/>
		<path
			d='M5.66663 1.66675L7.99996 4.00008L10.3333 1.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTvWarning;
