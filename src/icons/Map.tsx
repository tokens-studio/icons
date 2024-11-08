import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMap = ({
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
			d='m6 12.667-3.474 1.158a.4.4 0 0 1-.526-.38V3.622a.4.4 0 0 1 .274-.38L6 2m0 10.667L10 14m-4-1.333V2m0 0 4 1.333M10 14l3.726-1.242a.4.4 0 0 0 .274-.38V2.555a.4.4 0 0 0-.527-.38L10 3.334M10 14V3.333'
		/>
	</svg>
);
export default SvgMap;
