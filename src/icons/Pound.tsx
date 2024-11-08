import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPound = ({
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
			d='M7.111 9.067c-.74 1.777-1.852 3.555-3.333 4.266h7.037s1.111 0 1.852-.71M10.074 9.067H2.667M11.556 5.867c0-1.768-1.493-3.2-3.334-3.2S4.89 4.099 4.89 5.867c0 1.767 1.492 3.2 3.333 3.2'
		/>
	</svg>
);
export default SvgPound;
