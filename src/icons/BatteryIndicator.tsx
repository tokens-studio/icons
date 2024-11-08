import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBatteryIndicator = ({
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
			d='M9.333 8.667H12M4 8.667h1.333m0 0h1.334m-1.334 0V7.333m0 1.334V10M4 4.667H1.733a.4.4 0 0 0-.4.4v7.2c0 .22.18.4.4.4h12.534a.4.4 0 0 0 .4-.4v-7.2a.4.4 0 0 0-.4-.4H12m-8 0V3.333h1.333v1.334M4 4.667h1.333m6.667 0V3.333h-1.333v1.334m1.333 0h-1.333m-5.334 0h5.334'
		/>
	</svg>
);
export default SvgBatteryIndicator;
