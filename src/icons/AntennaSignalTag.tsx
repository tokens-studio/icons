import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAntennaSignalTag = ({
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
			strokeWidth={1.5}
			d='M1.333 10V6a4 4 0 0 1 4-4h5.334a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 6s.667.75.667 2S10 10 10 10M8 8.007l.007-.008M11.333 4.667S12.667 5.857 12.667 8s-1.334 3.333-1.334 3.333M6 6s-.667.75-.667 2S6 10 6 10M4.667 4.667S3.333 5.857 3.333 8s1.334 3.333 1.334 3.333'
		/>
	</svg>
);
export default SvgAntennaSignalTag;
