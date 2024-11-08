import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCursorPointer = ({
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
			d='M13.002 6.646c.803.327.742 1.483-.091 1.723L8.707 9.577l-1.92 3.93c-.38.779-1.53.638-1.712-.21L3.118 4.172a.913.913 0 0 1 1.235-1.037z'
			clipRule='evenodd'
		/>
	</svg>
);
export default SvgCursorPointer;
