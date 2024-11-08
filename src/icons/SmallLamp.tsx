import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSmallLamp = ({
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
			d='m4.581 2.285-1.76 5.867a.4.4 0 0 0 .383.515h9.592a.4.4 0 0 0 .383-.515l-1.76-5.867A.4.4 0 0 0 11.036 2H4.964a.4.4 0 0 0-.383.285M8 11.333V10M5.733 14h4.534c.22 0 .396-.18.361-.397-.12-.743-.61-2.27-2.628-2.27s-2.509 1.527-2.628 2.27c-.035.218.14.397.361.397'
		/>
	</svg>
);
export default SvgSmallLamp;
