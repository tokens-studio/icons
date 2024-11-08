import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRewind = ({
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
			d='M14.03 3.803a.4.4 0 0 1 .637.322v7.75a.4.4 0 0 1-.638.322L8.77 8.322a.4.4 0 0 1 0-.644zM6.696 3.803a.4.4 0 0 1 .637.322v7.75a.4.4 0 0 1-.637.322L1.437 8.322a.4.4 0 0 1 0-.644z'
		/>
	</svg>
);
export default SvgRewind;
