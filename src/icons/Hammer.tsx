import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHammer = ({
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
			d='m7.09 7.37-5.658 5.657 1.415 1.414 5.656-5.656M7.09 7.37l.942-.942s.236-2.122-2.121-4.479l.707-.707 5.657 3.771-.707.707.942.943.707-.707 1.65 1.65-3.3 3.3-1.65-1.65.708-.707-.943-.943-1.179 1.179z'
		/>
	</svg>
);
export default SvgHammer;
