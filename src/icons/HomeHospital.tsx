import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHomeHospital = ({
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
			d='m2 6.333 6-3.666 6 3.666M12.667 8.667v4.266a.4.4 0 0 1-.4.4H3.733a.4.4 0 0 1-.4-.4V8.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.111 11.333H6.89V9.778H5.333V7.556H6.89V6H9.11v1.556h1.556v2.222H9.11z'
		/>
	</svg>
);
export default SvgHomeHospital;
