import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCreditCards = ({
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
			d='M14.667 7.619V12c0 .736-.597 1.333-1.334 1.333H4.667A1.333 1.333 0 0 1 3.333 12v-1m11.334-3.381v-.952c0-.737-.597-1.334-1.334-1.334h-.666m2 2.286h-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12.667 5.333v4.334c0 .736-.597 1.333-1.334 1.333H2.667a1.333 1.333 0 0 1-1.334-1.333V4.333C1.333 3.597 1.93 3 2.667 3h8.666c.737 0 1.334.597 1.334 1.333zm0 0h-9'
		/>
	</svg>
);
export default SvgCreditCards;
