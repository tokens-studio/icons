import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEject = ({
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
			d='M3.33332 9.33335L2.93864 9.02635C2.8214 9.17715 2.80026 9.38148 2.88416 9.55302C2.96806 9.72455 3.14235 9.83335 3.33332 9.83335V9.33335ZM12.6667 9.33335V9.83335C12.8577 9.83335 13.0319 9.72455 13.1158 9.55302C13.1997 9.38148 13.1786 9.17715 13.0613 9.02635L12.6667 9.33335ZM3.33332 9.83335H12.6667V8.83335H3.33332V9.83335ZM7.07905 3.70297L2.93864 9.02635L3.72799 9.64035L7.86845 4.31691L7.07905 3.70297ZM13.0613 9.02635L8.92092 3.70296L8.13152 4.31691L12.272 9.64035L13.0613 9.02635ZM7.86845 4.31691C7.93518 4.23112 8.06479 4.23112 8.13152 4.31691L8.92092 3.70296C8.45378 3.10243 7.54619 3.10243 7.07905 3.70297L7.86845 4.31691Z'
			fill='currentColor'
		/>
		<path
			d='M3.33331 11.5C3.05717 11.5 2.83331 11.7239 2.83331 12C2.83331 12.2761 3.05717 12.5 3.33331 12.5V11.5ZM12.6666 12.5C12.9428 12.5 13.1666 12.2761 13.1666 12C13.1666 11.7239 12.9428 11.5 12.6666 11.5V12.5ZM3.33331 12.5H12.6666V11.5H3.33331V12.5Z'
			fill='currentColor'
		/>
	</svg>
);
export default SvgEject;
