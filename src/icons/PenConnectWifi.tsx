import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPenConnectWifi = ({
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
			d='m5.333 6.507.007-.008M2 4.167c1.667-2 5-2 6.667 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.333 5.5a2.5 2.5 0 0 1 4 0M11.667 4.333l.666-.666a1.414 1.414 0 1 1 2 2l-.666.666m-2-2-7.203 7.203a.67.67 0 0 0-.175.31l-.622 2.487 2.487-.622a.67.67 0 0 0 .31-.175l7.203-7.203m-2-2 2 2'
		/>
	</svg>
);
export default SvgPenConnectWifi;
