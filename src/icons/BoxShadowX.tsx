import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBoxShadowX = ({
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
			d='m14.203 12.003-.008-.006M14.203 9.337l-.008-.007M14.203 6.67l-.008-.007M14.203 4.003l-.008-.006M11.326 13.333h-8.66V2.667h8.66z'
		/>
	</svg>
);
export default SvgBoxShadowX;
