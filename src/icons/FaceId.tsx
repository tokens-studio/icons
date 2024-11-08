import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFaceId = ({
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
			d='M4.667 2H3.333C2.597 2 2 2.597 2 3.333v1.334M11.333 2h1.334C13.403 2 14 2.597 14 3.333v1.334M10.667 5.333v1.334M5.333 5.333v1.334M6 10.667s.667.666 2 .666 2-.666 2-.666M8 5.333v3.334h-.667M4.667 14H3.333A1.333 1.333 0 0 1 2 12.667v-1.334M11.333 14h1.334c.736 0 1.333-.597 1.333-1.333v-1.334'
		/>
	</svg>
);
export default SvgFaceId;
