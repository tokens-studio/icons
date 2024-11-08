import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloudDownload = ({
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
			d='M9 8.667v6m0 0 2.333-2.334M9 14.667l-2.333-2.334M14.333 11.738c.996-.39 2-1.279 2-3.071C16.333 6 14.111 5.333 13 5.333c0-1.333 0-4-4-4S5 4 5 5.333c-1.111 0-3.333.667-3.333 3.334 0 1.792 1.004 2.681 2 3.071'
		/>
	</svg>
);
export default SvgCloudDownload;
