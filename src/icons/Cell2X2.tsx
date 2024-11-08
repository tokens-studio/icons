import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCell2X2 = ({
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
			d='M14 2.4V8H8V2h5.6c.22 0 .4.18.4.4ZM14 13.6V8H8v6h5.6a.4.4 0 0 0 .4-.4ZM2 8V2.4c0-.22.18-.4.4-.4H8v6zM2 8v5.6c0 .22.18.4.4.4H8V8z'
		/>
	</svg>
);
export default SvgCell2X2;
