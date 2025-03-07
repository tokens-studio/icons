import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGoogleHome = ({
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
			d='M11.8056 11.3334C12.7556 10.2718 13.3334 8.87011 13.3334 7.33337C13.3334 4.01967 10.6471 1.33337 7.33337 1.33337C4.01967 1.33337 1.33337 4.01967 1.33337 7.33337C1.33337 10.6471 4.01967 13.3334 7.33337 13.3334C9.11037 13.3334 10.707 12.5608 11.8056 11.3334ZM11.8056 11.3334H13C13.9205 11.3334 14.6667 12.0796 14.6667 13C14.6667 13.9205 13.9205 14.6667 13 14.6667H11.3334'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M7.33337 7.34004L7.34004 7.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 7.34004L5.34004 7.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33337 7.34004L9.34004 7.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGoogleHome;
