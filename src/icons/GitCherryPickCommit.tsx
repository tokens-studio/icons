import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGitCherryPickCommit = ({
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
			d='M11.333 7.333v-.666c0-.737-.597-1.334-1.333-1.334H8m0 0H6c-.736 0-1.333.597-1.333 1.334v.666m3.333-2V2.667M8 13.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 11.333H2M10 11.333h4'
		/>
	</svg>
);
export default SvgGitCherryPickCommit;
