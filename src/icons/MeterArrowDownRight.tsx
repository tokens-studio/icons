import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMeterArrowDownRight = ({
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
			d='m1.667 2.333 3 3m0 0V2.667m0 2.666H2M10 10.667 7.667 8.333'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M9.667 6c-2.762 0-5 2.189-5 4.889 0 .756.175 1.471.488 2.11a.62.62 0 0 0 .56.334h7.903a.62.62 0 0 0 .56-.334 4.8 4.8 0 0 0 .489-2.11c0-2.7-2.239-4.889-5-4.889Z'
		/>
	</svg>
);
export default SvgMeterArrowDownRight;
