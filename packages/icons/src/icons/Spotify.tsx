import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSpotify = ({
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
			d='M4.66669 9.99992C4.66669 9.99992 7.66669 9.33325 10.6667 10.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.33331 8C4.33331 8 8.33331 7 11.6666 9'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 6.00001C6 5.66669 9.33333 5.33337 12.6667 7.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99998 14.6666C4.31808 14.6666 1.33331 11.6818 1.33331 7.99992C1.33331 4.31802 4.31808 1.33325 7.99998 1.33325C11.6818 1.33325 14.6666 4.31802 14.6666 7.99992C14.6666 11.6818 11.6818 14.6666 7.99998 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSpotify;
