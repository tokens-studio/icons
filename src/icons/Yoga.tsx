import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgYoga = ({
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
			d='m9.714 10.002.572 1.23s2.571.547 2.571 1.846c0 .922-1.143.922-1.143.922H8.667l-1.5-.833'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m6.286 10.002-.572 1.23s-2.571.547-2.571 1.846c0 .922 1.143.922 1.143.922h1.38l1.5-.833L9 12'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M2 10.617s1.429-.307 2.286-.615C5.143 5.697 7.714 6.005 8 6.005s2.857-.308 3.714 3.997c.857.308 2.286.615 2.286.615M8 4.667A1.333 1.333 0 1 0 8 2a1.333 1.333 0 0 0 0 2.667'
		/>
	</svg>
);
export default SvgYoga;
