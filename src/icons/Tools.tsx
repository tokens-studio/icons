import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTools = ({
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
			d='m6.7 7.071-4.714 4.714a1.333 1.333 0 1 0 1.886 1.886l4.714-4.714M11.462 9.2l2.585 2.585a1.333 1.333 0 1 1-1.885 1.886l-4.14-4.14M4.488 3.936l-1.414.471L1.66 2.05l.943-.943L4.96 2.522zm0 0 1.887 1.887'
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
export default SvgTools;
