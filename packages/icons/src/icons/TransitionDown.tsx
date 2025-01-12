import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTransitionDown = ({
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
			d='M12 1.33325H4C2.89543 1.33325 2 2.22869 2 3.33325V4.66659C2 5.77115 2.89543 6.66658 4 6.66658H12C13.1046 6.66658 14 5.77115 14 4.66659V3.33325C14 2.22869 13.1046 1.33325 12 1.33325Z'
			stroke='currentColor'
		/>
		<path
			d='M2 10.6667V12.0001C2 13.4728 3.19391 14.6667 4.66667 14.6667H11.3333C12.8061 14.6667 14 13.4728 14 12.0001V10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 6.66675V12.0001M8 12.0001L6 10.0001M8 12.0001L10 10.0001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTransitionDown;
