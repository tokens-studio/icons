import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEvChargeAlt = ({
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
			d='M14.667 3.333 13.333 6 12 3.333M10.667 3.333H9.333V6h1.334M9.333 4.667h1'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M4 6v6.667C4 13.403 4.597 14 5.333 14h6c.737 0 1.334-.597 1.334-1.333V9.333M6 3.733v.934C6 5.403 5.403 6 4.667 6H3.333A1.333 1.333 0 0 1 2 4.667v-.934c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4ZM2.667 3.333V2M5.333 3.333V2'
		/>
	</svg>
);
export default SvgEvChargeAlt;
