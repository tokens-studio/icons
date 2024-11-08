import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgType = ({
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
			d='M4.667 10.832a.4.4 0 0 0-.117-.283L2.117 8.118A.4.4 0 0 1 2 7.834V2.667c0-.737.597-1.334 1.333-1.334h9.334c.736 0 1.333.597 1.333 1.334v5.167a.4.4 0 0 1-.117.283L11.45 10.55a.4.4 0 0 0-.118.283v2.501c0 .737-.597 1.334-1.333 1.334H6a1.333 1.333 0 0 1-1.333-1.334z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m6.333 7.667.334-.734m0 0L8 4l1.333 2.933m-2.666 0h2.666m.334.734-.334-.734'
		/>
	</svg>
);
export default SvgType;
