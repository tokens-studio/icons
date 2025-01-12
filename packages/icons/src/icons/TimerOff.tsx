import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTimerOff = ({
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
			d='M6 1.33325H10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33325 4.66675L12.6666 14.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 6.66675V9.33341'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.12708 5.66667C3.22191 6.62244 2.66675 7.91307 2.66675 9.33333C2.66675 12.2789 5.05456 14.6667 8.00008 14.6667C9.33668 14.6667 10.5584 14.175 11.4943 13.3627M12.9457 11.3333C13.1957 10.7157 13.3334 10.0406 13.3334 9.33333C13.3334 6.38781 10.9456 4 8.00008 4C7.34588 4 6.71915 4.11779 6.14 4.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTimerOff;
