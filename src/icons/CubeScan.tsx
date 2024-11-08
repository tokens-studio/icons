import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCubeScan = ({
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
			d='M4 2H2v2M12 2h2v2M4 14H2v-2M12 14h2v-2M8.343 11.794l2.667-1.6c.2-.12.323-.337.323-.571V7.044a.67.67 0 0 0-.323-.572l-2.667-1.6a.67.67 0 0 0-.686 0l-2.667 1.6a.67.67 0 0 0-.323.572v2.579c0 .234.123.45.323.571l2.667 1.6a.67.67 0 0 0 .686 0'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m5 7 3 1.666m0 0S10.51 7.3 11 7M8 8.666v3'
		/>
	</svg>
);
export default SvgCubeScan;
