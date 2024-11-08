import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgElectronicsChip = ({
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
			d='M4.667 12.933V3.067c0-.221.179-.4.4-.4h5.866c.221 0 .4.179.4.4v9.866a.4.4 0 0 1-.4.4H5.067a.4.4 0 0 1-.4-.4M9.333 13.333V15M6.667 13.333V15M9.333 2.667V1M6.667 2.667V1M4.667 8H3M13 8h-1.667M4.667 4.333H3M13 4.333h-1.667M4.667 11.667H3M13 11.667h-1.667'
		/>
	</svg>
);
export default SvgElectronicsChip;
