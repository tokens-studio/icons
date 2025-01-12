import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPrintingPage = ({
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
			d='M11.7143 12H13.6C13.8209 12 14 11.8209 14 11.6V7.33329C14 5.86053 12.8061 4.66663 11.3333 4.66663H4.66667C3.19391 4.66663 2 5.86053 2 7.33329V11.6C2 11.8209 2.17909 12 2.4 12H4.28571'
			stroke='currentColor'
		/>
		<path
			d='M5.33337 4.66667V2.4C5.33337 2.17909 5.51246 2 5.73337 2H10.2667C10.4876 2 10.6667 2.17909 10.6667 2.4V4.66667'
			stroke='currentColor'
		/>
		<path
			d='M4.06525 13.5434L4.28574 12L4.61763 9.67677C4.64579 9.47977 4.81455 9.33337 5.01361 9.33337H10.9864C11.1855 9.33337 11.3542 9.47977 11.3824 9.67677L11.7143 12L11.9348 13.5434C11.9692 13.7844 11.7822 14 11.5388 14H4.46123C4.21781 14 4.03083 13.7844 4.06525 13.5434Z'
			stroke='currentColor'
		/>
		<path
			d='M11.3334 6.6733L11.34 6.66589'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPrintingPage;
