import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoundHigh = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M1.667 9.238V6.762c0-.736.597-1.333 1.333-1.333h1.933c.13 0 .258-.039.367-.11l4-2.637a.667.667 0 0 1 1.033.556v9.524c0 .53-.59.849-1.033.556l-4-2.636a.67.67 0 0 0-.367-.11H3a1.333 1.333 0 0 1-1.333-1.334Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12.667 5s1 1 1 2.667-1 2.666-1 2.666M14.667 3s1.666 1.667 1.666 4.667-1.666 4.666-1.666 4.666'
		/>
	</svg>
);
export default SvgSoundHigh;
