import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPercentage = ({
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
			d='M11.3333 12.6667C10.5969 12.6667 10 12.0697 10 11.3333C10 10.5969 10.5969 10 11.3333 10C12.0697 10 12.6667 10.5969 12.6667 11.3333C12.6667 12.0697 12.0697 12.6667 11.3333 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66665 6.00004C3.93027 6.00004 3.33331 5.40309 3.33331 4.66671C3.33331 3.93033 3.93027 3.33337 4.66665 3.33337C5.40303 3.33337 5.99998 3.93033 5.99998 4.66671C5.99998 5.40309 5.40303 6.00004 4.66665 6.00004Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 3.33337L3.33331 12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPercentage;
