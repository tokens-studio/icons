import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKanbanBoard = ({
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
			d='M2 2.4v11.2c0 .22.18.4.4.4h11.2a.4.4 0 0 0 .4-.4V2.4a.4.4 0 0 0-.4-.4H2.4a.4.4 0 0 0-.4.4M4 4v6.667M6.667 4v2M9.333 4v4.667M12 4v3.333'
		/>
	</svg>
);
export default SvgKanbanBoard;
