import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCubeHole = ({
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
			d='M8 10.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14 4.902v6.196a.4.4 0 0 1-.206.35l-5.6 3.11a.4.4 0 0 1-.388 0l-5.6-3.11a.4.4 0 0 1-.206-.35V4.902a.4.4 0 0 1 .206-.35l5.6-3.11a.4.4 0 0 1 .388 0l5.6 3.11a.4.4 0 0 1 .206.35M2.352 4.862 5.6 6.667m8.067-1.815L10.4 6.667M8 14v-3.333'
		/>
	</svg>
);
export default SvgCubeHole;
