import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShoppingBagArrowUp = ({
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
			d='M11 14h1.446c.817 0 1.442-.729 1.318-1.536l-.923-6c-.1-.65-.66-1.13-1.318-1.13H4.477c-.658 0-1.218.48-1.318 1.13l-.923 6C2.112 13.27 2.737 14 3.554 14H5M8 12.667V8m0 0 2 2M8 8l-2 2M9.333 3.333a1.333 1.333 0 1 0-2.666 0'
		/>
	</svg>
);
export default SvgShoppingBagArrowUp;
