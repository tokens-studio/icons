import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAdobeAfterEffects = ({
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
			d='M14 4.66667V11.3333C14 12.8061 12.8061 14 11.3333 14H4.66667C3.19391 14 2 12.8061 2 11.3333V4.66667C2 3.19391 3.19391 2 4.66667 2H11.3333C12.8061 2 14 3.19391 14 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33334 8.66667V8.00001C9.33334 7.26361 9.93028 6.66667 10.6667 6.66667C11.4031 6.66667 12 7.26361 12 8.00001V8.66667H9.33334ZM9.33334 8.66667V9.33334C9.33334 10.0697 9.93028 10.6667 10.6667 10.6667H11.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 10.6667L4.75 8.66666M4.75 8.66666L6 5.33333L7.25 8.66666M4.75 8.66666H7.25M8 10.6667L7.25 8.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAdobeAfterEffects;
