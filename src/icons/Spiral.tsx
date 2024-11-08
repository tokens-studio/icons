import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSpiral = ({
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
			d='M2.333 4.003C2.333 5.205 4.238 6 7.667 6 12.333 6 13 4.003 13 4.003S12.333 2 7.667 2c-3.429 0-5.334.8-5.334 2.003M2.333 8.003C2.333 9.205 4.238 10 7.667 10 12.333 10 13 8.003 13 8.003S12.333 6 7.667 6c-3.429 0-5.334.8-5.334 2.003M2.333 12.003C2.333 13.205 4.238 14 7.667 14 12.333 14 13 12.003 13 12.003S12.333 10 7.667 10c-3.429 0-5.334.8-5.334 2.003M13 8s.667-.65.667-2S13 4 13 4M13.667 2.667C13.667 3.567 13 4 13 4M13 12s.667-.65.667-2S13 8 13 8M13.667 13.333C13.667 12.433 13 12 13 12'
		/>
	</svg>
);
export default SvgSpiral;
