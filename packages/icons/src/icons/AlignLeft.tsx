import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlignLeft = ({
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
			d='M4 21V3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 15.75V16.25C8 16.6642 8.33579 17 8.75 17H18.75C19.1642 17 19.5 16.6642 19.5 16.25V15.75M8 15.75V15.25C8 14.8358 8.33579 14.5 8.75 14.5H18.75C19.1642 14.5 19.5 14.8358 19.5 15.25V15.75M8 15.75H19.5M8 8.25V8.75C8 9.16421 8.33579 9.5 8.75 9.5H12.75C13.1642 9.5 13.5 9.16421 13.5 8.75V8.25M8 8.25V7.75C8 7.33579 8.33579 7 8.75 7H12.75C13.1642 7 13.5 7.33579 13.5 7.75V8.25M8 8.25H13.5'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgAlignLeft;
