import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCalendarCheck = ({
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
			d='M8.667 14H3.333A1.333 1.333 0 0 1 2 12.667v-6h12V10m-4-7.333V1.333m0 1.334V4m0-1.333H7M2 6.667V4c0-.736.597-1.333 1.333-1.333h1.334M4.667 1.333V4M14 6.667V4c0-.736-.597-1.333-1.333-1.333h-.334M10.667 13.333 12 14.667 14.667 12'
		/>
	</svg>
);
export default SvgCalendarCheck;
