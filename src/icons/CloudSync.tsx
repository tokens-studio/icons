import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloudSync = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M14.333 11.738c.996-.39 2-1.279 2-3.071C16.333 6 14.111 5.333 13 5.333c0-1.333 0-4-4-4S5 4 5 5.333c-1.111 0-3.333.667-3.333 3.334 0 1.792 1.004 2.681 2 3.071M6.054 12.992l1.178 1.178a2.667 2.667 0 0 0 3.772 0l.235-.236'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m6.29 14.642-.236-1.65 1.65.235zM11.865 11.268l-1.178-1.179a2.667 2.667 0 0 0-3.771 0l-.236.236'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m11.63 9.618.235 1.65-1.65-.236z'
		/>
	</svg>
);
export default SvgCloudSync;
