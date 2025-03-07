import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMacDock = ({
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
			d='M5.33333 11.3333C5.14924 11.3333 5 11.184 5 11C5 10.8159 5.14924 10.6666 5.33333 10.6666C5.51743 10.6666 5.66667 10.8159 5.66667 11C5.66667 11.184 5.51743 11.3333 5.33333 11.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00002 11.3333C7.81595 11.3333 7.66669 11.184 7.66669 11C7.66669 10.8159 7.81595 10.6666 8.00002 10.6666C8.18409 10.6666 8.33335 10.8159 8.33335 11C8.33335 11.184 8.18409 11.3333 8.00002 11.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 11.3333C10.4826 11.3333 10.3333 11.184 10.3333 11C10.3333 10.8159 10.4826 10.6666 10.6666 10.6666C10.8507 10.6666 11 10.8159 11 11C11 11.184 10.8507 11.3333 10.6666 11.3333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 14H1.99998C1.63179 14 1.33331 13.7015 1.33331 13.3333V2.66667C1.33331 2.29848 1.63179 2 1.99998 2H14C14.3682 2 14.6666 2.29848 14.6666 2.66667V13.3333C14.6666 13.7015 14.3682 14 14 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33331 11.6667L2.66665 11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 11.6667L13.3333 11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMacDock;
