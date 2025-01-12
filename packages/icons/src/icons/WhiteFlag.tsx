import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWhiteFlag = ({
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
			d='M3.33335 10.0001L3.96694 3.03053C3.98568 2.8245 4.15842 2.66675 4.3653 2.66675H13.562C13.7972 2.66675 13.9817 2.86871 13.9603 3.10296L13.3664 9.63628C13.3477 9.84235 13.1749 10.0001 12.9681 10.0001H3.33335ZM3.33335 10.0001L2.93335 14.0001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWhiteFlag;
