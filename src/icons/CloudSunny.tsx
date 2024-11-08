import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloudSunny = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
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
			d='M5 9.667c-1.111 0-3.333.666-3.333 3.333S3.889 16.333 5 16.333h8c1.111 0 3.333-.666 3.333-3.333S14.111 9.667 13 9.667M9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4M13.667 7h.666M9 2.333v-.666M13.333 3.333 12.667 4M4.667 3.333 5.333 4M3.667 7h.666'
		/>
	</svg>
);
export default SvgCloudSunny;
