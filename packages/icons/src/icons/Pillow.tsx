import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPillow = ({
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
			d='M14.027 8.18852L14.426 10.9821C14.5484 11.8389 13.8347 12.5835 12.9734 12.4973L8.1327 12.0133C8.0445 12.0045 7.95557 12.0045 7.86737 12.0133L3.02663 12.4973C2.16537 12.5835 1.45162 11.8389 1.57403 10.9821L1.97309 8.18852C1.99096 8.06346 1.99096 7.93652 1.97309 7.81146L1.57403 5.01793C1.45162 4.16108 2.16537 3.41652 3.02663 3.50265L7.86737 3.98672C7.95557 3.99554 8.0445 3.99554 8.1327 3.98672L12.9734 3.50265C13.8347 3.41652 14.5484 4.16108 14.426 5.01792L14.027 7.81146C14.0091 7.93652 14.0091 8.06346 14.027 8.18852Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 4L11.3334 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66667 10L2 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPillow;
