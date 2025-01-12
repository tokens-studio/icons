import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAdobePhotoshop = ({
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
			d='M4.66669 10.6667V7.99999M4.66669 7.99999V5.33333H6.00002C6.73642 5.33333 7.33335 5.93028 7.33335 6.66666C7.33335 7.40306 6.73642 7.99999 6.00002 7.99999H4.66669Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 7.33334C11.1291 6.92474 10.7115 6.66667 10.2547 6.66667H10C9.44773 6.66667 9 7.11441 9 7.66667C9 8.21894 9.44773 8.66667 10 8.66667H10.3333C10.8856 8.66667 11.3333 9.11441 11.3333 9.66667C11.3333 10.2189 10.8856 10.6667 10.3333 10.6667H10.0787C9.62187 10.6667 9.20427 10.4086 9 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAdobePhotoshop;
