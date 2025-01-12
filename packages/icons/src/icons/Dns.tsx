import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDns = ({
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
			d='M14.6666 8.66665V7.99998C14.6666 4.31808 11.6818 1.33331 7.99998 1.33331C4.31808 1.33331 1.33331 4.31808 1.33331 7.99998C1.33331 9.50091 1.82962 10.8857 2.66665 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66669 1.36591C8.66669 1.36591 10.6667 3.99965 10.6667 7.99962V8.66635'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33331 1.36591C7.33331 1.36591 5.33331 3.99965 5.33331 7.99962V8.66635'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.75323 10.3333H2.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.75323 5.66669H14.247'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66669 14.6667V10.6667H5.33335C6.06973 10.6667 6.66669 11.2636 6.66669 12V13.3334C6.66669 14.0698 6.06973 14.6667 5.33335 14.6667H4.66669Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66669 14.6667V10.6667L10.6667 14.6667V10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 14.6667H14C14.5523 14.6667 15 14.219 15 13.6667C15 13.1144 14.5523 12.6667 14 12.6667H13.6667C13.1144 12.6667 12.6667 12.219 12.6667 11.6667C12.6667 11.1144 13.1144 10.6667 13.6667 10.6667H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDns;
