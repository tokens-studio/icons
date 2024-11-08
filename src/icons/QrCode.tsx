import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgQrCode = ({
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
			d='M10 8v2M8 2v2M12 8v2M8 12h6M12 14h2M4 8h2M4 4.007 4.007 4M8 8.007 8.007 8M2 8.007 2.007 8M8 6.007 8.007 6M8 10.007 8.007 10M10 14.007l.007-.007M8 14.007 8.007 14M14 8.007 14.007 8M14 10.007l.007-.007M12 4.007 12.007 4M6 2.4v3.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4M14 2.4v3.2a.4.4 0 0 1-.4.4h-3.2a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4M4 12.007 4.007 12M6 10.4v3.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4v-3.2c0-.22.18-.4.4-.4h3.2c.22 0 .4.18.4.4'
		/>
	</svg>
);
export default SvgQrCode;
