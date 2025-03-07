import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSidebar = ({
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
			d='M8.62069 2H12.3448C12.7838 2 13.2048 2.17438 13.5152 2.48479C13.8256 2.79519 14 3.21619 14 3.65517V12.3448C14 12.7838 13.8256 13.2048 13.5152 13.5152C13.2048 13.8256 12.7838 14 12.3448 14H8.62069M2 12.3448V3.65517C2 3.21619 2.17438 2.79519 2.48479 2.48479C2.79519 2.17438 3.21619 2 3.65517 2H5.72414V14H3.65517C3.21619 14 2.79519 13.8256 2.48479 13.5152C2.17438 13.2048 2 12.7838 2 12.3448Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSidebar;
