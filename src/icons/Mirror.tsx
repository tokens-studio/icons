import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMirror = ({
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
			d='M13.333 2.667v10.666c0 .737-.597 1.334-1.333 1.334H4a1.333 1.333 0 0 1-1.333-1.334V2.667c0-.737.597-1.334 1.333-1.334h8c.736 0 1.333.597 1.333 1.334M13.333 3.333l-4 3.334M13.333 6l-5 4'
		/>
	</svg>
);
export default SvgMirror;
