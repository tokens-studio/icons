import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitBranch = ({
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
			d='M12 5.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666M4 13.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666M4 10.667V2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.333 12H6c2.333 0 6-1.4 6-5.667v-1'
		/>
	</svg>
);
export default SvgGitBranch;
