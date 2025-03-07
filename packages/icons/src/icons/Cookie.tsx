import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCookie = ({
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
			d='M8.00004 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6818 4.31814 14.6666 8.00004 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.99996 7.33335C4.81587 7.33335 4.66663 7.18409 4.66663 7.00002C4.66663 6.81595 4.81587 6.66669 4.99996 6.66669C5.18405 6.66669 5.33329 6.81595 5.33329 7.00002C5.33329 7.18409 5.18405 7.33335 4.99996 7.33335Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66667 12C8.29847 12 8 11.7016 8 11.3334C8 10.9652 8.29847 10.6667 8.66667 10.6667C9.03487 10.6667 9.33333 10.9652 9.33333 11.3334C9.33333 11.7016 9.03487 12 8.66667 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 4.67336L7.34004 4.66595'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 10.6734L5.34004 10.666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 6.00667L10.6733 5.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3334 9.33998L11.34 9.33258'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66663 8.00667L8.67329 7.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCookie;
