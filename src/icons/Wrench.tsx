import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWrench = ({
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
			d='m6.7 7.071-4.714 4.714a1.333 1.333 0 1 0 1.886 1.886l4.714-4.714'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.7 7.071c-.562-1.435-.452-3.318.707-4.478s3.3-1.414 4.479-.707L9.858 3.913 9.67 5.987l2.074-.189 2.027-2.027c.707 1.179.453 3.319-.707 4.479s-3.043 1.27-4.478.707'
		/>
	</svg>
);
export default SvgWrench;
