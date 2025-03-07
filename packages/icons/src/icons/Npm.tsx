import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgNpm = ({
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
			d='M1.66663 5.33337H16.3333V10H8.33329V11.3334H5.99996V10H1.66663V5.33337Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 5.33337V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 5.33337V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M13 7.33337V10' stroke='currentColor' strokeLinecap='round' />
		<path d='M4.33337 7.33337V10' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M8.33337 7.33337V8.00004'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M14.6666 7.33337V10' stroke='currentColor' strokeLinecap='round' />
	</svg>
);
export default SvgNpm;
