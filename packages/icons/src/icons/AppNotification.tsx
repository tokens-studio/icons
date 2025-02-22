import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppNotification = ({
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
			d='M12.6667 5.33333C13.7713 5.33333 14.6667 4.43789 14.6667 3.33333C14.6667 2.22876 13.7713 1.33333 12.6667 1.33333C11.5621 1.33333 10.6667 2.22876 10.6667 3.33333C10.6667 4.43789 11.5621 5.33333 12.6667 5.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 8V10C14 12.2091 12.2091 14 10 14H6C3.79086 14 2 12.2091 2 10V6C2 3.79086 3.79086 2 6 2H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAppNotification;
