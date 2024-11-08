import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgForward = ({
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
			d='M1.97 3.803a.4.4 0 0 0-.637.322v7.75a.4.4 0 0 0 .638.322L7.23 8.322a.4.4 0 0 0 0-.644zM9.304 3.803a.4.4 0 0 0-.637.322v7.75a.4.4 0 0 0 .637.322l5.259-3.875a.4.4 0 0 0 0-.644z'
		/>
	</svg>
);
export default SvgForward;
