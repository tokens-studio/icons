import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitPullRequestClosed = ({
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
			d='M12 14a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 12 14M4 14a1.333 1.333 0 1 0 0-2.667A1.333 1.333 0 0 0 4 14M4 7.333v4M12 11.333V4.667s0-1.334-1.333-1.334H8M2.667 4.828 4.08 3.414m0 0L5.495 2M4.081 3.414 2.667 2M4.08 3.414l1.414 1.414'
		/>
	</svg>
);
export default SvgGitPullRequestClosed;
