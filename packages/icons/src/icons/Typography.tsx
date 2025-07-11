import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTypography = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M4.00006 7C4.00006 6.06812 4.00006 5.60218 4.1523 5.23463C4.35529 4.74458 4.74464 4.35523 5.23469 4.15224C5.60224 4 6.06818 4 7.00006 4H17.0001C17.9319 4 18.3979 4 18.7654 4.15224C19.2555 4.35523 19.6448 4.74458 19.8478 5.23463C20.0001 5.60218 20.0001 6.06812 20.0001 7M9.00006 20H15.0001M12.0001 4V20'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTypography;
