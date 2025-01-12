import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCreditCards = ({
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
			d='M14.6667 7.61905V12C14.6667 12.7364 14.0698 13.3333 13.3334 13.3333H4.66671C3.93033 13.3333 3.33337 12.7364 3.33337 12V11M14.6667 7.61905V6.66665C14.6667 5.93027 14.0698 5.33331 13.3334 5.33331H12.6667M14.6667 7.61905H12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 5.33333V9.66667C12.6667 10.4031 12.0698 11 11.3334 11H2.66671C1.93033 11 1.33337 10.4031 1.33337 9.66667V4.33333C1.33337 3.59695 1.93033 3 2.66671 3H11.3334C12.0698 3 12.6667 3.59695 12.6667 4.33333V5.33333ZM12.6667 5.33333H3.66671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCreditCards;
