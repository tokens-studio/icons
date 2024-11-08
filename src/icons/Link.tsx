import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLink = ({
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
			d='M9.333 7.998c0-1.66-1.544-3.331-3.428-3.331H4.762c-1.894 0-3.429 1.491-3.429 3.331 0 1.586 1.14 2.913 2.667 3.25q.368.082.762.082'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.667 7.998c0 1.661 1.544 3.332 3.428 3.332h1.143c1.894 0 3.429-1.492 3.429-3.332 0-1.585-1.14-2.912-2.667-3.249a3.5 3.5 0 0 0-.762-.082'
		/>
	</svg>
);
export default SvgLink;
