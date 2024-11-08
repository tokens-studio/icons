import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPackageLock = ({
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
			d='M9.333 13.333H4A1.333 1.333 0 0 1 2.667 12V4c0-.736.597-1.333 1.333-1.333h8c.736 0 1.333.597 1.333 1.333v4M8 6V2.667M14.111 12.333h.156a.4.4 0 0 1 .4.4v1.534a.4.4 0 0 1-.4.4h-2.534a.4.4 0 0 1-.4-.4v-1.534c0-.22.18-.4.4-.4h.156m2.222 0v-1.166c0-.39-.222-1.167-1.111-1.167s-1.111.778-1.111 1.167v1.166m2.222 0H11.89'
		/>
	</svg>
);
export default SvgPackageLock;
