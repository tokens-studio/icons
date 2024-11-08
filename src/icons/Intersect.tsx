import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgIntersect = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
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
			d='M14 9v2m-5 3h2M11 6H6.4a.4.4 0 0 0-.4.4V11M7 14h-.6a.4.4 0 0 1-.4-.4V13M14 13v.6a.4.4 0 0 1-.4.4H13M13 6h.6c.22 0 .4.18.4.4V7M2 7V5m3-3h2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5 10h4.6a.4.4 0 0 0 .4-.4V5M3 10h-.6a.4.4 0 0 1-.4-.4V9M2 3v-.6c0-.22.18-.4.4-.4H3M9 2h.6c.22 0 .4.18.4.4V3'
		/>
	</svg>
);
export default SvgIntersect;
