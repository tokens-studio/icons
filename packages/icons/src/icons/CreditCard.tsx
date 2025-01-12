import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCreditCard = ({
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
			d='M14.6667 5.99998V11.3333C14.6667 12.0697 14.0698 12.6666 13.3334 12.6666H2.66671C1.93033 12.6666 1.33337 12.0697 1.33337 11.3333V4.66665C1.33337 3.93027 1.93033 3.33331 2.66671 3.33331H13.3334C14.0698 3.33331 14.6667 3.93027 14.6667 4.66665V5.99998ZM14.6667 5.99998H4.00004'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCreditCard;
