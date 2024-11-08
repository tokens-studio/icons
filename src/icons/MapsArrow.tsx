import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapsArrow = ({
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
			d='m2.457 12.522 5.252-9.339a.333.333 0 0 1 .582 0l5.252 9.339a.333.333 0 0 1-.41.474l-5.012-1.95a.33.33 0 0 0-.242 0l-5.011 1.95a.333.333 0 0 1-.411-.474'
		/>
	</svg>
);
export default SvgMapsArrow;
