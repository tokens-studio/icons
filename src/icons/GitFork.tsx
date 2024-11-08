import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitFork = ({
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
			d='M11.333 4.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M4.667 4.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M4.667 14a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667M4.667 4.667v6.666M11.333 4.667v.666c0 1.667-1.333 2-1.333 2L6 8.667s-1.333.333-1.333 2v.666'
		/>
	</svg>
);
export default SvgGitFork;
