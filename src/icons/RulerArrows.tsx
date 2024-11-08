import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRulerArrows = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.267 14.667H6.733a.4.4 0 0 1-.4-.4V1.733c0-.22.18-.4.4-.4h4.534c.22 0 .4.18.4.4v12.534a.4.4 0 0 1-.4.4M11.667 11.333h-2M11.667 4.667h-2M9.667 8h6.666m0 0L15 9.333M16.333 8 15 6.667M1.667 8 3 6.667M1.667 8 3 9.333M1.667 8h4.666'
		/>
	</svg>
);
export default SvgRulerArrows;
