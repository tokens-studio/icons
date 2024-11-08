import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUnity5 = ({
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
			d='M7.781 13.857a.4.4 0 0 0 .438 0l6.189-4.041a.4.4 0 0 0 .16-.462L12.19 2.273A.4.4 0 0 0 11.81 2H4.148a.4.4 0 0 0-.38.275L1.43 9.355a.4.4 0 0 0 .161.46z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.667 4h-3l-.334 3.333a2 2 0 1 1 0 2'
		/>
	</svg>
);
export default SvgUnity5;
