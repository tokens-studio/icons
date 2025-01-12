import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDropletHalf = ({
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
		<path d='M3 11L12.3333 6.66669' stroke='currentColor' />
		<path
			d='M13.3334 9.33331C13.3334 6.38779 8.00008 1.33331 8.00008 1.33331C8.00008 1.33331 2.66675 6.38779 2.66675 9.33331C2.66675 12.2788 5.05456 14.6666 8.00008 14.6666C10.9456 14.6666 13.3334 12.2788 13.3334 9.33331Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgDropletHalf;
