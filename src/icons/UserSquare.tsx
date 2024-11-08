import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserSquare = ({
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
			strokeWidth={1.5}
			d='M4.667 12v-.667a3.333 3.333 0 0 1 6.666 0V12'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14 2.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4'
		/>
	</svg>
);
export default SvgUserSquare;
