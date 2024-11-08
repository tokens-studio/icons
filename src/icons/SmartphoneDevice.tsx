import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSmartphoneDevice = ({
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
			d='m8 10.673.007-.007'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M4.667 12.933V3.067c0-.221.179-.4.4-.4h5.866c.221 0 .4.179.4.4v9.866a.4.4 0 0 1-.4.4H5.067a.4.4 0 0 1-.4-.4Z'
		/>
	</svg>
);
export default SvgSmartphoneDevice;
