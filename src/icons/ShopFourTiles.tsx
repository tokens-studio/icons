import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShopFourTiles = ({
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
			strokeWidth={1.5}
			d='M13.657 2h-2.661l.333 3.333S11.996 6 12.996 6c.718 0 1.207-.344 1.425-.538a.34.34 0 0 0 .1-.31l-.47-2.818A.4.4 0 0 0 13.657 2Z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='m10.996 2 .333 3.333S10.662 6 9.662 6s-1.666-.667-1.666-.667V2zM7.995 2v3.333S7.33 6 6.33 6s-1.667-.667-1.667-.667L4.995 2z'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M4.996 2H2.334a.4.4 0 0 0-.394.334l-.47 2.818a.34.34 0 0 0 .1.31c.219.194.708.538 1.426.538 1 0 1.666-.667 1.666-.667zM2 6v6.667C2 13.403 2.597 14 3.333 14h9.334c.736 0 1.333-.597 1.333-1.333V6'
		/>
		<path
			stroke='currentColor'
			strokeMiterlimit={16}
			strokeWidth={1.5}
			d='M9.889 14v-4c0-.736-.597-1.333-1.333-1.333H7.222c-.736 0-1.333.597-1.333 1.333v4'
		/>
	</svg>
);
export default SvgShopFourTiles;
