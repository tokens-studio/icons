import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgInputField = ({
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
			d='M2.66665 4H13.3333C14.0697 4 14.6666 4.59695 14.6666 5.33333V10.6667C14.6666 11.4031 14.0697 12 13.3333 12H2.66665C1.93027 12 1.33331 11.4031 1.33331 10.6667V5.33333C1.33331 4.59695 1.93027 4 2.66665 4Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33331 5.66663H4.33331M4.33331 5.66663H5.33331M4.33331 5.66663V10.3333M4.33331 10.3333H3.33331M4.33331 10.3333H5.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgInputField;
