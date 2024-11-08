import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWebWindowXmark = ({
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
			d='M3.333 4.667H4'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 11.81V4.19c0-.841.664-1.523 1.482-1.523h10.37c.818 0 1.482.682 1.482 1.524v7.619c0 .841-.664 1.523-1.482 1.523H2.815c-.818 0-1.482-.682-1.482-1.523Z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.667 9.333 8 8m0 0 1.333-1.333M8 8 6.667 6.667M8 8l1.333 1.333'
		/>
	</svg>
);
export default SvgWebWindowXmark;
