import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReminderHandGesture = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m11.667 8 1.336 1.781c.385.514.35 1.228-.084 1.701l-2.523 2.752a1.33 1.33 0 0 1-.982.433h-3.08c-1.573 0-2.416-1.717-2.655-2.62a.4.4 0 0 1-.012-.096V6.286c0-1.524 2-1.524 2 0v.38'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.667 6.667V5.524c0-1.524-2-1.524-2 0v1.142M9.667 6.667V5c0-1.524-2-1.524-2 0v1.667M9.667 6.667V2.333a1 1 0 1 1 2 0V10'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M11.708 4.333h1.375c.584 0 .917-.28.917-.833s-.333-.833-.917-.833H8.167a.833.833 0 0 0-.834.833v.167c0 .368.299.666.667.666'
		/>
	</svg>
);
export default SvgReminderHandGesture;
