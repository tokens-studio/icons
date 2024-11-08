import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReplyToMessage = ({
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
			d='m4.667 5.333 3.333 2 3.333-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeWidth={1.5}
			d='M6.667 13.333h-4A1.333 1.333 0 0 1 1.333 12V4c0-.736.597-1.333 1.334-1.333h10.666c.737 0 1.334.597 1.334 1.333v4.571'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 11.407h4.2c2.4 0 2.4 3.26 0 3.26m-4.2-3.26 2.1-2.074m-2.1 2.074 2.1 2.075'
		/>
	</svg>
);
export default SvgReplyToMessage;
