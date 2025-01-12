import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgX = ({
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
			d='M11.2132 13.8456L2.50211 2.64557C2.29776 2.38283 2.48499 2 2.81785 2H4.47103C4.59447 2 4.71099 2.05699 4.78677 2.15443L13.4979 13.3544C13.7023 13.6172 13.515 14 13.1821 14H11.529C11.4055 14 11.289 13.943 11.2132 13.8456Z'
			stroke='currentColor'
		/>
		<path
			d='M13.3333 2L2.66663 14'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgX;
