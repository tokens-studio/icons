import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNintendoSwitch = ({
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
			d='M1.33337 11.3333V4.66667C1.33337 3.19391 2.52728 2 4.00004 2H6.60004C6.82097 2 7.00004 2.17909 7.00004 2.4V13.6C7.00004 13.8209 6.82097 14 6.60004 14H4.00004C2.52728 14 1.33337 12.8061 1.33337 11.3333Z'
			stroke='currentColor'
		/>
		<path
			d='M4.33329 5.33333C4.70148 5.33333 4.99996 5.03485 4.99996 4.66667C4.99996 4.29848 4.70148 4 4.33329 4C3.96511 4 3.66663 4.29848 3.66663 4.66667C3.66663 5.03485 3.96511 5.33333 4.33329 5.33333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6667 9.33333C12.0349 9.33333 12.3333 9.03487 12.3333 8.66667C12.3333 8.29847 12.0349 8 11.6667 8C11.2985 8 11 8.29847 11 8.66667C11 9.03487 11.2985 9.33333 11.6667 9.33333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 11.3333V4.66667C14.6667 3.19391 13.4727 2 12 2H9.4C9.17907 2 9 2.17909 9 2.4V13.6C9 13.8209 9.17907 14 9.4 14H12C13.4727 14 14.6667 12.8061 14.6667 11.3333Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgNintendoSwitch;
