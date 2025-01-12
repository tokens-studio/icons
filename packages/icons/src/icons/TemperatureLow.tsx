import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTemperatureLow = ({
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
			d='M4.00002 7.99976C3.19039 8.60789 2.66669 9.57616 2.66669 10.6667C2.66669 12.5076 4.15907 14 6.00002 14C7.84095 14 9.33335 12.5076 9.33335 10.6667C9.33335 9.57616 8.80962 8.60789 8.00002 7.99976'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 8V2H8V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 2H9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 4H9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 6H9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 4.66667C13.403 4.66667 14 4.06971 14 3.33333C14 2.59695 13.403 2 12.6666 2C11.9302 2 11.3333 2.59695 11.3333 3.33333C11.3333 4.06971 11.9302 4.66667 12.6666 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.00002 9.33325C5.26364 9.33325 4.66669 9.93019 4.66669 10.6666C4.66669 11.403 5.26364 11.9999 6.00002 11.9999C6.73642 11.9999 7.33335 11.403 7.33335 10.6666C7.33335 9.93019 6.73642 9.33325 6.00002 9.33325ZM6.00002 9.33325V7.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTemperatureLow;
