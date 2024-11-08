import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseWarning = ({
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
			d='M13.333 10.667V12M13.333 14.673l.007-.007M2.667 4v4s0 2 4.666 2S12 8 12 8V4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.333 2C12 2 12 4 12 4s0 2-4.667 2-4.666-2-4.666-2 0-2 4.666-2M7.333 14c-4.666 0-4.666-2-4.666-2V8'
		/>
	</svg>
);
export default SvgDatabaseWarning;
