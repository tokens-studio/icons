import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAdobePhotoshop = ({
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
			d='M14 4.667v6.666A2.667 2.667 0 0 1 11.333 14H4.667A2.667 2.667 0 0 1 2 11.333V4.667A2.667 2.667 0 0 1 4.667 2h6.666A2.667 2.667 0 0 1 14 4.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.667 10.667V8m0 0V5.333H6A1.333 1.333 0 1 1 6 8zM11.333 7.333a1.21 1.21 0 0 0-1.078-.666H10a1 1 0 0 0 0 2h.333a1 1 0 0 1 0 2h-.254c-.457 0-.875-.258-1.079-.667'
		/>
	</svg>
);
export default SvgAdobePhotoshop;
