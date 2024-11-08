import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitPullRequest = ({
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
			d='M12 14a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 12 14M4 4.667A1.333 1.333 0 1 0 4 2a1.333 1.333 0 0 0 0 2.667M4 14a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 4 14M4 4.667v6.666M12 11.333V4.667s0-1.334-1.333-1.334h-2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10 5 8.334 3.333 10 1.667'
		/>
	</svg>
);
export default SvgGitPullRequest;
