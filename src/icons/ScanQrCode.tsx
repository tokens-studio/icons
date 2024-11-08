import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgScanQrCode = ({
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
			d='M6 4.4v1.2a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4V4.4c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4M4 8h2M10 8v2M8 12h2M8 8.007 8.007 8M12 8.007 12.007 8M8 10.007 8.007 10M12 10.007l.007-.007M12 12.007l.007-.007M8 6.007 8.007 6M8 4.007 8.007 4M6 10.4v1.2a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4v-1.2c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4M12 4.4v1.2a.4.4 0 0 1-.4.4h-1.2a.4.4 0 0 1-.4-.4V4.4c0-.22.18-.4.4-.4h1.2c.22 0 .4.18.4.4M12 2h2v2M12 14h2v-2M4 2H2v2M4 14H2v-2'
		/>
	</svg>
);
export default SvgScanQrCode;
