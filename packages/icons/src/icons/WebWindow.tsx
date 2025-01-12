import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWebWindow = ({
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
			d='M3.33333 4.66675H3.99999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33333 11.8096V4.19055C1.33333 3.34898 1.99661 2.66675 2.81481 2.66675H13.1852C14.0034 2.66675 14.6667 3.34898 14.6667 4.19055V11.8096C14.6667 12.6512 14.0034 13.3334 13.1852 13.3334H2.81481C1.99661 13.3334 1.33333 12.6512 1.33333 11.8096Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgWebWindow;
