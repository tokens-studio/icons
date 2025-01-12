import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapsArrowDiagonal = ({
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
			d='M2.68758 5.94456L13.0054 3.05558C13.2557 2.9855 13.4863 3.21614 13.4162 3.46645L10.5272 13.7842C10.4428 14.0856 10.0272 14.1151 9.90117 13.8286L7.73564 8.907C7.7021 8.83067 7.6411 8.76974 7.56477 8.73614L2.64322 6.57066C2.35675 6.44462 2.38621 6.02895 2.68758 5.94456Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMapsArrowDiagonal;
