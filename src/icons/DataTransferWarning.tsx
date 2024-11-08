import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDataTransferWarning = ({
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
			d='M4.667 2.667v.666M4.667 6v.667M11.333 8V2.667m0 0 2 2m-2-2-2 2M13.333 10.667V12M13.333 14.673l.007-.007M4.667 9.333v4m0 0 2-2m-2 2-2-2'
		/>
	</svg>
);
export default SvgDataTransferWarning;
