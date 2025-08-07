import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignVerticalCenter = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			opacity={0.5}
			d='M21 12H3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.25 19.75H8.75C9.16421 19.75 9.5 19.4142 9.5 19V5C9.5 4.58579 9.16421 4.25 8.75 4.25H8.25M8.25 19.75H7.75C7.33579 19.75 7 19.4142 7 19V5C7 4.58579 7.33579 4.25 7.75 4.25H8.25M8.25 19.75V4.25M15.75 15.75H16.25C16.6642 15.75 17 15.4142 17 15V9C17 8.58579 16.6642 8.25 16.25 8.25H15.75M15.75 15.75H15.25C14.8358 15.75 14.5 15.4142 14.5 15V9C14.5 8.58579 14.8358 8.25 15.25 8.25H15.75M15.75 15.75V8.25'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgAlignVerticalCenter;
