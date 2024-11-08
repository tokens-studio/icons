import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgScreenshot = ({
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
			d='M6.667 14.267V9.596c0-.221.179-.4.4-.4h.782a.4.4 0 0 0 .336-.184l.964-1.495a.4.4 0 0 1 .336-.184h2.364a.4.4 0 0 1 .336.184l.964 1.495a.4.4 0 0 0 .336.184h.782a.4.4 0 0 1 .4.4v4.67a.4.4 0 0 1-.4.4h-7.2a.4.4 0 0 1-.4-.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 12.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M2 12v2h1.667M2 6.333v3.334M2 4V2h2M6.333 2h3.334M12 2h2v1.667M14 6.667v-1'
		/>
	</svg>
);
export default SvgScreenshot;
