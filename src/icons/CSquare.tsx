import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCSquare = ({
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
			d='M14 2.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.333 6.667v-.134a1.2 1.2 0 0 0-1.2-1.2h-.266a1.2 1.2 0 0 0-1.2 1.2v2.934a1.2 1.2 0 0 0 1.2 1.2h.266a1.2 1.2 0 0 0 1.2-1.2v-.134'
		/>
	</svg>
);
export default SvgCSquare;
