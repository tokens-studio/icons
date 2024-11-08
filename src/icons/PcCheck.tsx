import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPcCheck = ({
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
			d='m6 7 1.333 1.333L10 5.667'
		/>
	</svg>
);
export default SvgPcCheck;
