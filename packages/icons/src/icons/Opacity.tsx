import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOpacity = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M11.9966 20.9998C16.9672 20.9998 20.9966 16.9703 20.9966 11.9998C20.9966 7.02919 16.9672 2.99976 11.9966 2.99976C7.02608 2.99976 2.99664 7.02919 2.99664 11.9998C2.99664 16.9703 7.02608 20.9998 11.9966 20.9998Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M9.50997 16H9.51997V16.01H9.50997V16Z' stroke='currentColor' />
		<path d='M17.51 8H17.52V8.01H17.51V8Z' stroke='currentColor' />
		<path d='M17.51 12H17.52V12.01H17.51V12Z' stroke='currentColor' />
		<path d='M19.51 10H19.52V10.01H19.51V10Z' stroke='currentColor' />
		<path d='M13.51 12H13.52V12.01H13.51V12Z' stroke='currentColor' />
		<path d='M15.51 10H15.52V10.01H15.51V10Z' stroke='currentColor' />
		<path d='M15.51 14H15.52V14.01H15.51V14Z' stroke='currentColor' />
		<path d='M11.51 14H11.52V14.01H11.51V14Z' stroke='currentColor' />
		<path d='M13.5 16H13.51V16.01H13.5V16Z' stroke='currentColor' />
		<path d='M9.50997 19.99H9.51997V20H9.50997V19.99Z' stroke='currentColor' />
		<path d='M7.5 17.99H7.51V18H7.5V17.99Z' stroke='currentColor' />
		<path d='M11.51 18H11.52V18.01H11.51V18Z' stroke='currentColor' />
		<path d='M15.5 18H15.51V18.01H15.5V18Z' stroke='currentColor' />
		<path d='M13.52 20H13.53V20.01H13.52V20Z' stroke='currentColor' />
		<path d='M17.52 16.01H17.53V16.02H17.52V16.01Z' stroke='currentColor' />
		<path d='M19.52 14.01H19.53V14.02H19.52V14.01Z' stroke='currentColor' />
	</svg>
);
export default SvgOpacity;
