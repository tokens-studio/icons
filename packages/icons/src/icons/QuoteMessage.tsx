import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgQuoteMessage = ({
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
			d='M2 13.5263V3.33333C2 2.59695 2.59695 2 3.33333 2H12.6667C13.4031 2 14 2.59695 14 3.33333V10C14 10.7364 13.4031 11.3333 12.6667 11.3333H5.3075C4.90245 11.3333 4.51937 11.5175 4.26634 11.8337L2.71235 13.7762C2.47614 14.0715 2 13.9045 2 13.5263Z'
			stroke='currentColor'
		/>
		<path
			d='M7 6.66663H5.66667C5.29848 6.66663 5 6.36815 5 5.99996V5.33329C5 4.96511 5.29848 4.66663 5.66667 4.66663H6.33333C6.70153 4.66663 7 4.96511 7 5.33329V6.66663ZM7 6.66663C7 7.33329 6.33333 7.99996 5.66667 8.66663'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M11 6.66663H9.66667C9.29847 6.66663 9 6.36815 9 5.99996V5.33329C9 4.96511 9.29847 4.66663 9.66667 4.66663H10.3333C10.7015 4.66663 11 4.96511 11 5.33329V6.66663ZM11 6.66663C11 7.33329 10.3333 7.99996 9.66667 8.66663'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgQuoteMessage;
