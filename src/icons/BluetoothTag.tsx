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
			d='m6 6.4 4 3.4L7.905 12V4L10 6.2 6 9.6'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 10V6a4 4 0 0 1 4-4h5.334a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4Z'
		/>
	</svg>
);
export default SvgBluetoothTag;
