import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCardLock = ({
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
			d='M14.667 6V4.667c0-.737-.597-1.334-1.334-1.334H2.667c-.737 0-1.334.597-1.334 1.334v6.666c0 .737.597 1.334 1.334 1.334h6.666M14.667 6H4m10.667 0v2.667M14.111 12.333h.156c.22 0 .4.18.4.4v1.534a.4.4 0 0 1-.4.4h-2.534a.4.4 0 0 1-.4-.4v-1.534a.4.4 0 0 1 .4-.4h.156m2.222 0v-1.166c0-.39-.222-1.167-1.111-1.167s-1.111.778-1.111 1.167v1.166m2.222 0H11.89'
		/>
	</svg>
);
export default SvgCardLock;
