import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWarningTriangle = ({
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
			d='M13.3619 13.9999H2.63805C1.61269 13.9999 0.971066 12.8908 1.48217 12.0019L6.84415 2.67676C7.35681 1.78516 8.64321 1.78515 9.15588 2.67676L14.5179 12.0019C15.0289 12.8908 14.3873 13.9999 13.3619 13.9999Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M8 6V8.66667' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M8 11.3399L8.00667 11.3325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWarningTriangle;
