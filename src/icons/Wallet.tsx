import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWallet = ({
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
			strokeWidth={1.5}
			d='M12.667 13.333H3.333A1.333 1.333 0 0 1 2 12V6c0-.736.597-1.333 1.333-1.333h9.334C13.403 4.667 14 5.264 14 6v6c0 .736-.597 1.333-1.333 1.333Z'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11 9.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M12 4.667v-.932c0-.876-.83-1.514-1.677-1.288L2.99 4.403C2.406 4.558 2 5.087 2 5.69V6'
		/>
	</svg>
);
export default SvgWallet;
