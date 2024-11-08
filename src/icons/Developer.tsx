import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDeveloper = ({
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
			d='M4.545 14.667v-1.905c-.104-1.034-.79-1.818-1.424-2.762m6.515 4.667v-1.143c3.273 0 2.91-3.81 2.91-3.81S14 9.714 14 8.191l-1.455-2.286c0-3.047-2.472-4.544-5.09-4.571-1.467-.016-2.639.353-3.514 1'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 4.667 10 6.333 8.667 8M3.333 4.667 2 6.333 3.333 8M6.667 4 5.333 8.667'
		/>
	</svg>
);
export default SvgDeveloper;
