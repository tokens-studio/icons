import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgIosSettings = ({
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
			d='M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 8H8M8 8L6 4.53516M8 8L6 11.4649'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00004 12.6667C10.5774 12.6667 12.6667 10.5774 12.6667 8.00004C12.6667 5.42271 10.5774 3.33337 8.00004 3.33337C5.42271 3.33337 3.33337 5.42271 3.33337 8.00004C3.33337 10.5774 5.42271 12.6667 8.00004 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeDasharray='1 3'
		/>
		<path
			d='M8.00004 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8.00004 1.33337C4.31814 1.33337 1.33337 4.31814 1.33337 8.00004C1.33337 11.6819 4.31814 14.6667 8.00004 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 10C9.1046 10 10 9.1046 10 8C10 6.8954 9.1046 6 8 6C6.8954 6 6 6.8954 6 8C6 9.1046 6.8954 10 8 10Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgIosSettings;
