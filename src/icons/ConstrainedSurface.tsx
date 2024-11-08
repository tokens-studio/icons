import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgConstrainedSurface = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
		height={18}
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
			d='M3 16.333a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666M15 16.333a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666M3 4.333a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666M15 4.333a1.333 1.333 0 1 1 0-2.666 1.333 1.333 0 0 1 0 2.666M9.667 9c0-.83-.773-1.667-1.715-1.667h-.571c-.947 0-1.714.747-1.714 1.667 0 .793.57 1.457 1.333 1.625q.188.042.381.042'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.333 9c0 .83.773 1.667 1.715 1.667h.571c.947 0 1.714-.746 1.714-1.667 0-.793-.57-1.457-1.333-1.625a1.8 1.8 0 0 0-.381-.042M15 13.667V4.333M3 13.667V4.333M4.333 3h9.334M4.333 15h9.334'
		/>
	</svg>
);
export default SvgConstrainedSurface;
