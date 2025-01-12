import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabase = ({
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
			d='M3.33337 8V12C3.33337 12 3.33337 14 8.00004 14C12.6667 14 12.6667 12 12.6667 12V8'
			stroke='currentColor'
		/>
		<path
			d='M3.33337 4V8C3.33337 8 3.33337 10 8.00004 10C12.6667 10 12.6667 8 12.6667 8V4'
			stroke='currentColor'
		/>
		<path
			d='M8.00004 2C12.6667 2 12.6667 4 12.6667 4C12.6667 4 12.6667 6 8.00004 6C3.33337 6 3.33337 4 3.33337 4C3.33337 4 3.33337 2 8.00004 2Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgDatabase;
