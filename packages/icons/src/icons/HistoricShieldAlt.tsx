import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHistoricShieldAlt = ({
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
			d='M7.82109 14.5772L4.14073 12.7371C3.2373 12.2854 2.66663 11.362 2.66663 10.352V1.73337C2.66663 1.51246 2.84571 1.33337 3.06663 1.33337H12.9333C13.1542 1.33337 13.3333 1.51246 13.3333 1.73337V10.352C13.3333 11.362 12.7626 12.2854 11.8592 12.7371L8.17883 14.5772C8.06623 14.6336 7.93369 14.6336 7.82109 14.5772Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 6.66671V1.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66663 6.66663H13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHistoricShieldAlt;
