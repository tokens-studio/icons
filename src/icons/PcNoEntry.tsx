import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPcNoEntry = ({
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
			d='M4.667 14.667h6.666'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 11.333V2.667c0-.737.597-1.334 1.334-1.334h10.666c.737 0 1.334.597 1.334 1.334v8.666c0 .737-.597 1.334-1.334 1.334H2.667a1.333 1.333 0 0 1-1.334-1.334Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.904 5.133a2.667 2.667 0 1 0-3.809 3.733m3.81-3.733a2.667 2.667 0 0 1-3.809 3.733m3.808-3.733L6.096 8.867'
		/>
	</svg>
);
export default SvgPcNoEntry;
