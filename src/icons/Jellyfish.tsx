import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgJellyfish = ({
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
			d='M8 1.333c3.314 0 6 2.736 6 6.112q0 .067-.002.136c-.013.636-.576 1.086-1.212 1.086H3.214c-.636 0-1.199-.45-1.213-1.086L2 7.445c0-3.376 2.686-6.112 6-6.112M4 8.667l.667.75c.38.427.38 1.072 0 1.5a1.13 1.13 0 0 0 0 1.5c.38.427.38 1.072 0 1.5l-.667.75M7.333 8.667l.667.75c.38.427.38 1.072 0 1.5a1.13 1.13 0 0 0 0 1.5c.38.427.38 1.072 0 1.5l-.667.75M10.667 8.667l.666.75c.38.427.38 1.072 0 1.5a1.13 1.13 0 0 0 0 1.5c.38.427.38 1.072 0 1.5l-.666.75'
		/>
	</svg>
);
export default SvgJellyfish;
