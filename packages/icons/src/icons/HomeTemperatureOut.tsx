import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHomeTemperatureOut = ({
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
			d='M9.33341 5.33327L2.87437 2.10375C2.74598 2.03956 2.59304 2.04908 2.47361 2.1287L1.66675 2.66661'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 7.33337V12.6667C8 13.4031 7.40307 14 6.66667 14H4.66667M4.66667 14H2.4C2.17909 14 2 13.821 2 13.6V10.4C2 10.1791 2.17909 10 2.4 10H4.26667C4.48758 10 4.66667 10.1791 4.66667 10.4V14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 12C13.403 12 13.9999 11.4031 13.9999 10.6667C13.9999 9.93031 13.403 9.33337 12.6666 9.33337C11.9302 9.33337 11.3333 9.93031 11.3333 10.6667C11.3333 11.4031 11.9302 12 12.6666 12Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 5V9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 8H14.0001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 6H14.0001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHomeTemperatureOut;
