import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgRook = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M4.66663 10.6666H11.3333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M6 7.33337H10' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M6.66663 2.66663V3.99996'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M9.33337 2.66663V3.99996'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M11.6 5.99996H4.4C4.17909 5.99996 4 5.82087 4 5.59996V3.06663C4 2.84571 4.17909 2.66663 4.4 2.66663H11.6C11.8209 2.66663 12 2.84571 12 3.06663V5.59996C12 5.82087 11.8209 5.99996 11.6 5.99996Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M11.934 14H4.06597C3.74951 14 3.55451 13.6491 3.71839 13.3784C4.52817 12.0407 6.33331 8.88473 6.33331 7.33333V6.39977C6.33331 6.17885 6.51239 6 6.73331 6H9.26664C9.48757 6 9.66664 6.17885 9.66664 6.39977V7.33333C9.66664 8.88473 11.4718 12.0407 12.2816 13.3784C12.4454 13.6491 12.2504 14 11.934 14Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgRook;
