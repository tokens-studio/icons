import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserStar = ({
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
			d='M7.99998 8.00008C9.47271 8.00008 10.6666 6.80615 10.6666 5.33341C10.6666 3.86065 9.47271 2.66675 7.99998 2.66675C6.52722 2.66675 5.33331 3.86065 5.33331 5.33341C5.33331 6.80615 6.52722 8.00008 7.99998 8.00008Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33331 13.3333V12.6667C3.33331 10.0893 5.42265 8 7.99998 8C8.71571 8 9.39378 8.16113 9.99998 8.44907'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.09 10.9433L11.7827 9.47465C11.8716 9.28612 12.1285 9.28612 12.2174 9.47465L12.9101 10.9433L14.4591 11.1803C14.6578 11.2107 14.737 11.4664 14.5932 11.6131L13.4725 12.7555L13.737 14.3695C13.771 14.5767 13.5631 14.7347 13.3852 14.6369L12 13.8745L10.6148 14.6369C10.437 14.7347 10.2291 14.5767 10.2631 14.3695L10.5276 12.7555L9.4069 11.6131C9.26303 11.4664 9.34223 11.2107 9.54096 11.1803L11.09 10.9433Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUserStar;
