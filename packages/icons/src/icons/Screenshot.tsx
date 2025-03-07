import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgScreenshot = ({
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
			d='M6.66675 14.2667V9.59584C6.66675 9.37491 6.84581 9.19584 7.06675 9.19584H7.84862C7.98462 9.19584 8.11121 9.12677 8.18488 9.01244L9.14861 7.51671C9.22228 7.40244 9.34888 7.33337 9.48488 7.33337H11.8486C11.9846 7.33337 12.1112 7.40244 12.1849 7.51671L13.1486 9.01244C13.2223 9.12677 13.3489 9.19584 13.4849 9.19584H14.2667C14.4877 9.19584 14.6667 9.37491 14.6667 9.59584V14.2667C14.6667 14.4876 14.4877 14.6667 14.2667 14.6667H7.06675C6.84581 14.6667 6.66675 14.4876 6.66675 14.2667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 12.6667C11.403 12.6667 11.9999 12.0697 11.9999 11.3333C11.9999 10.5969 11.403 10 10.6666 10C9.93019 10 9.33325 10.5969 9.33325 11.3333C9.33325 12.0697 9.93019 12.6667 10.6666 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 12V14H3.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 6.33337V9.66671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 4V2H4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33325 2H9.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 2H14V3.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 6.66663V5.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgScreenshot;
