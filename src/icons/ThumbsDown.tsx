import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgThumbsDown = ({
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
			d='M10.982 2.333H2.733a.4.4 0 0 0-.4.4v6.534c0 .22.18.4.4.4h1.845c.469 0 .903.245 1.144.647l1.807 3.012a1.087 1.087 0 0 0 1.974-.873l-.682-2.271a.4.4 0 0 1 .383-.515h3.05c.88 0 1.518-.836 1.287-1.685l-1.273-4.666a1.33 1.33 0 0 0-1.286-.983Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4.667 9.667V2.333'
		/>
	</svg>
);
export default SvgThumbsDown;
