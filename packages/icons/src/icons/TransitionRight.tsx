import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTransitionRight = ({
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
			d='M1.33334 12V4C1.33334 2.89543 2.22878 2 3.33334 2H4.66668C5.77124 2 6.66668 2.89543 6.66668 4V12C6.66668 13.1046 5.77124 14 4.66668 14H3.33334C2.22878 14 1.33334 13.1046 1.33334 12Z'
			stroke='currentColor'
		/>
		<path
			d='M10.6667 2H12C13.4727 2 14.6667 3.19391 14.6667 4.66667V11.3333C14.6667 12.8061 13.4727 14 12 14H10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66666 8H12M12 8L9.99999 6M12 8L9.99999 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTransitionRight;
