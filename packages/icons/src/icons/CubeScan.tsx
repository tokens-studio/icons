import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCubeScan = ({
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
			d='M4 2H2V4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 2H14V4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 14H2V12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 14H14V12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.34308 11.7942L11.0097 10.1942C11.2105 10.0737 11.3334 9.85674 11.3334 9.62254V7.04414C11.3334 6.80994 11.2105 6.59295 11.0097 6.47247L8.34308 4.87247C8.13195 4.7458 7.86821 4.7458 7.65708 4.87247L4.99041 6.47247C4.78961 6.59295 4.66675 6.80994 4.66675 7.04414V9.62254C4.66675 9.85674 4.78961 10.0737 4.99041 10.1942L7.65708 11.7942C7.86821 11.9209 8.13195 11.9209 8.34308 11.7942Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5 7L8 8.66633M8 8.66633C8 8.66633 10.5091 7.29947 11 7M8 8.66633V11.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCubeScan;
