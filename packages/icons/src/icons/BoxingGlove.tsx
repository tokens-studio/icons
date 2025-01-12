import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoxingGlove = ({
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
			d='M5.65942 11.8182H12.2371M5.65942 11.8182V14H12.2371V11.8182M5.65942 11.8182C3.46686 10.3637 2.37057 6.72727 2.736 5.63637C3.02834 4.76363 4.31952 5.0303 4.92857 5.27273C4.92857 2.72727 6.02485 2 8.94828 2C11.8717 2 13.3334 2.72727 13.3334 6.36363C13.3334 9.27273 12.6025 11.2121 12.2371 11.8182'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.92847 5.27274C5.17209 5.51516 5.87858 6.00001 6.75559 6.00001C7.63265 6.00001 9.31359 6.00001 10.0445 6.00001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.92847 5.27274C4.92847 7.81821 6.02475 8.18181 6.75559 8.18181'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBoxingGlove;
