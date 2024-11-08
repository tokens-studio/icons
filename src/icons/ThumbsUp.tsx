import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgThumbsUp = ({
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
			d='M10.982 13.333H2.733a.4.4 0 0 1-.4-.4V6.4c0-.221.18-.4.4-.4h1.845c.469 0 .903-.246 1.144-.647L7.529 2.34a1.087 1.087 0 0 1 1.974.872L8.82 5.485A.4.4 0 0 0 9.204 6h3.05c.88 0 1.518.836 1.287 1.684l-1.273 4.667c-.158.58-.685.982-1.287.982Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.667 13.333V6'
		/>
	</svg>
);
export default SvgThumbsUp;
