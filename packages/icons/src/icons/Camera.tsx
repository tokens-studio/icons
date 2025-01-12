import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCamera = ({
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
			d='M1.33337 12.6667V6C1.33337 5.26362 1.93033 4.66667 2.66671 4.66667H3.00004C3.41971 4.66667 3.8149 4.46907 4.06671 4.13333L5.54671 2.16C5.62225 2.05928 5.74081 2 5.86671 2H10.1334C10.2593 2 10.3778 2.05928 10.4534 2.16L11.9334 4.13333C12.1852 4.46907 12.5804 4.66667 13 4.66667H13.3334C14.0698 4.66667 14.6667 5.26362 14.6667 6V12.6667C14.6667 13.4031 14.0698 14 13.3334 14H2.66671C1.93033 14 1.33337 13.4031 1.33337 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00004 11.3333C9.47277 11.3333 10.6667 10.1394 10.6667 8.66667C10.6667 7.19393 9.47277 6 8.00004 6C6.52728 6 5.33337 7.19393 5.33337 8.66667C5.33337 10.1394 6.52728 11.3333 8.00004 11.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCamera;
