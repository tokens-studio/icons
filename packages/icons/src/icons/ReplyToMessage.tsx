import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReplyToMessage = ({
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
			d='M4.66669 5.33337L8.00002 7.33337L11.3334 5.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66665 13.3333H2.66665C1.93027 13.3333 1.33331 12.7364 1.33331 12V3.99996C1.33331 3.26358 1.93027 2.66663 2.66665 2.66663H13.3333C14.0697 2.66663 14.6666 3.26358 14.6666 3.99996V8.57136'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M8.66669 11.4074H12.8667C15.2667 11.4074 15.2667 14.6667 12.8667 14.6667M8.66669 11.4074L10.7667 9.33337M8.66669 11.4074L10.7667 13.4815'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgReplyToMessage;
