import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTextSpacing = ({
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
			d='M3.484 12.161h9.032m-9.032 0 1.666-1.333M3.484 12.16l1.666 1.333m7.366-1.333-1.333-1.333m1.333 1.333-1.333 1.333'
		/>
		<path
			fill='currentColor'
			d='m9.99 8.186-2.336-6.48h1.433l1.725 4.919 1.725-4.92h1.433l-2.346 6.48zM2.03 8.186l2.337-6.48h1.642l2.337 6.48H6.904l-.475-1.379H3.938l-.475 1.379zm2.3-2.52h1.716l-.858-2.5z'
		/>
	</svg>
);
export default SvgTextSpacing;
