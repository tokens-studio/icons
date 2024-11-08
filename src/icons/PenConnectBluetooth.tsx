import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPenConnectBluetooth = ({
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
			d='m4.333 11.667-.666 2.666 2.487-.622a.67.67 0 0 0 .31-.175l7.87-7.87a1.414 1.414 0 1 0-2-2L9.666 6.334M11.667 4.333l2 2M3.333 4.4 8 7.8 5.556 10V2L8 4.2 3.333 7.6'
		/>
	</svg>
);
export default SvgPenConnectBluetooth;
