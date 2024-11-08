import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBusStop = ({
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
			d='m10.667 10.673.006-.007M4 10.673l.007-.007M13.333 14.667V5.333m0 0H12v-4h2.667v4zM10.667 13.333H1.733a.4.4 0 0 1-.4-.4V8.4c0-.22.18-.4.4-.4h8.934M9.333 5.333H4m5.333-4H4A2.667 2.667 0 0 0 1.333 4v1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M2.333 13.333V14.6c0 .22.18.4.4.4H4.6a.4.4 0 0 0 .4-.4v-1.267M9.667 13.333V14.6c0 .22.179.4.4.4h.6'
		/>
	</svg>
);
export default SvgBusStop;
