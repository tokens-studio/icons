import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAttachment = ({
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
			d='m14.292 7.775-6.126 6.127a4.002 4.002 0 1 1-5.66-5.66l6.126-6.127a2.668 2.668 0 0 1 3.774 3.773l-6.134 6.127a1.334 1.334 0 0 1-1.886-1.887l5.66-5.653'
		/>
	</svg>
);
export default SvgAttachment;
