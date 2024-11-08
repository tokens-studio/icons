import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCopy = ({
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
			d='M12.933 13.333H6.4a.4.4 0 0 1-.4-.4V6.4c0-.22.18-.4.4-.4h6.533a.4.4 0 0 1 .4.4v6.533a.4.4 0 0 1-.4.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 6V3.067a.4.4 0 0 0-.4-.4H3.067a.4.4 0 0 0-.4.4V9.6c0 .221.179.4.4.4H6'
		/>
	</svg>
);
export default SvgCopy;
