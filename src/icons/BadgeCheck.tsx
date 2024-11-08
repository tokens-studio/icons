import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBadgeCheck = ({
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
			strokeWidth={1.5}
			d='M7.014 1.75a1.333 1.333 0 0 1 1.972 0l.68.746c.267.293.651.453 1.048.434l1.009-.047c.785-.037 1.43.61 1.394 1.394l-.047 1.01c-.019.396.14.78.434 1.047l.747.68c.58.53.58 1.443 0 1.972l-.747.68a1.33 1.33 0 0 0-.434 1.048l.047 1.009c.037.785-.61 1.43-1.394 1.394l-1.009-.047c-.397-.019-.78.14-1.048.434l-.68.747c-.53.58-1.443.58-1.972 0l-.68-.747a1.33 1.33 0 0 0-1.048-.434l-1.009.047a1.333 1.333 0 0 1-1.394-1.394l.047-1.009c.019-.397-.14-.78-.434-1.048l-.747-.68a1.333 1.333 0 0 1 0-1.972l.747-.68c.293-.267.453-.651.434-1.048l-.047-1.009a1.333 1.333 0 0 1 1.394-1.394l1.009.047c.397.019.78-.14 1.048-.434z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m6 8 1.333 1.333L10 6.667'
		/>
	</svg>
);
export default SvgBadgeCheck;
