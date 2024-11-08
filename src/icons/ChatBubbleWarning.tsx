import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChatBubbleWarning = ({
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
			d='M8 5.333V8M8 10.673l.007-.007M8 14.667a6.667 6.667 0 1 0-5.775-3.334l-.558 3 3-.558c.98.567 2.119.892 3.333.892'
		/>
	</svg>
);
export default SvgChatBubbleWarning;
