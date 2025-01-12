import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWindowTabs = ({
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
			d='M14.6667 5.33341H10.3333M10.3333 5.33341H6V2.66675M10.3333 5.33341V2.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 11.8096V4.19055C1.33337 3.34898 1.99665 2.66675 2.81485 2.66675H13.1852C14.0034 2.66675 14.6667 3.34898 14.6667 4.19055V11.8096C14.6667 12.6512 14.0034 13.3334 13.1852 13.3334H2.81485C1.99665 13.3334 1.33337 12.6512 1.33337 11.8096Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgWindowTabs;
