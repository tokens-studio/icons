import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgType = ({
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
			d='M4.66667 10.8323C4.66667 10.7262 4.62453 10.6245 4.54951 10.5495L2.11716 8.11705C2.04214 8.04205 2 7.94032 2 7.83425V2.66659C2 1.93021 2.59695 1.33325 3.33333 1.33325H8H12.6667C13.4031 1.33325 14 1.93021 14 2.66659V7.83425C14 7.94032 13.9579 8.04205 13.8829 8.11705L11.4505 10.5495C11.3755 10.6245 11.3333 10.7262 11.3333 10.8323V13.3333C11.3333 14.0697 10.7364 14.6666 10 14.6666H6C5.26362 14.6666 4.66667 14.0697 4.66667 13.3333V10.8323Z'
			stroke='currentColor'
		/>
		<path
			d='M6.33337 7.66667L6.66671 6.93333M6.66671 6.93333L8.00004 4L9.33337 6.93333M6.66671 6.93333H9.33337M9.66671 7.66667L9.33337 6.93333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgType;
