import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPrinter = ({
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
			d='M11.3334 8.67329L11.34 8.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66667 11.3333H11.3333M4 6.66667V2.4C4 2.17909 4.17909 2 4.4 2H11.6C11.8209 2 12 2.17909 12 2.4V6.66667M14 13.6V9.33333C14 7.8606 12.8061 6.66667 11.3333 6.66667H4.66667C3.19391 6.66667 2 7.8606 2 9.33333V13.6C2 13.8209 2.17909 14 2.4 14H13.6C13.8209 14 14 13.8209 14 13.6Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPrinter;
