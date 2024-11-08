import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEditPencil = ({
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
			d='m9.575 3.768.987-.987c.52-.52 1.365-.52 1.886 0l.942.943c.521.52.521 1.365 0 1.885l-.986.987M9.575 3.768l-6.41 6.41a1.33 1.33 0 0 0-.385.826l-.162 1.827c-.036.413.31.759.723.722l1.827-.161c.312-.028.604-.164.825-.385l6.41-6.41m-2.828-2.83 2.829 2.83'
		/>
	</svg>
);
export default SvgEditPencil;
