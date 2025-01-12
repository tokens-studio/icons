import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBluetoothTag = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M6 6.4L10 9.8L7.90473 12V4L10 6.2L6 9.6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33334 10V6C1.33334 3.79086 3.1242 2 5.33334 2H10.6667C12.8758 2 14.6667 3.79086 14.6667 6V10C14.6667 12.2091 12.8758 14 10.6667 14H5.33334C3.1242 14 1.33334 12.2091 1.33334 10Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgBluetoothTag;
