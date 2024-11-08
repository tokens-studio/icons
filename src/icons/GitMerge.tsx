import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitMerge = ({
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
			d='M12 13.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666M4 14V4.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M4 4.667V6c0 2.333 1.667 6 5.667 6h1M4 4.667A1.333 1.333 0 1 0 4 2a1.333 1.333 0 0 0 0 2.667'
		/>
	</svg>
);
export default SvgGitMerge;
