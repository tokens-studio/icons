import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShoppingBagCheck = ({
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
			d='m13.333 9.667-.492-3.203c-.1-.65-.66-1.13-1.318-1.13H4.477c-.658 0-1.218.48-1.318 1.13l-.923 6C2.112 13.27 2.737 14 3.554 14H8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m9.333 12.667 2 2 3.334-3.334M9.333 3.333a1.333 1.333 0 1 0-2.666 0'
		/>
	</svg>
);
export default SvgShoppingBagCheck;
