import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPinSlash = ({
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
			d='M6.333 9.667 2 14M5.117 5.26l-.652-.068-1.132 1.131 6.129 6.129 1.131-1.132-.068-.653m-2.869-6 2.449-2.886 3.9 3.9-2.872 2.436M2 2l12 12'
		/>
	</svg>
);
export default SvgPinSlash;
