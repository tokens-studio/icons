import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSpockHandGesture = ({
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
			d='m12 5 .613.102a1.333 1.333 0 0 1 1.082 1.605l-.352 1.583a.4.4 0 0 0-.01.087v3.29c0 1.333-1.066 2.666-2.666 2.666H6.28c-.39 0-.76-.17-1.012-.465L2.235 10.33A1.055 1.055 0 0 1 3.83 8.949l1.503 1.718V8.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m6 3.333-.527.088A1.333 1.333 0 0 0 4.41 5.103l.923 3.23M7.333 8.333 5.948 3.071a1.01 1.01 0 1 1 1.953-.514L9.333 8M11.333 8.333 12 5l.165-.99a1.024 1.024 0 0 0-2.017-.357L9.333 8'
		/>
	</svg>
);
export default SvgSpockHandGesture;
