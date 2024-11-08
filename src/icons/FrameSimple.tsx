import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFrameSimple = ({
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
			strokeMiterlimit={1.5}
			strokeWidth={1.5}
			d='M3.332 1.333H1.333v2h2zM3.332 2.334h9.333M2.333 3.332v9.335M13.665 3.333v9.335M3.332 13.667h9.333M3.332 12.667H1.333v1.999h2zM14.664 1.335h-1.999v1.999h2zM14.664 12.668h-1.999v1.999h2z'
		/>
	</svg>
);
export default SvgFrameSimple;
