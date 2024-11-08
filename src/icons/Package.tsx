import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPackage = ({
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
			d='M13.333 4v8c0 .736-.597 1.333-1.333 1.333H4A1.333 1.333 0 0 1 2.667 12V4c0-.736.597-1.333 1.333-1.333h8c.736 0 1.333.597 1.333 1.333M8 6V2.667'
		/>
	</svg>
);
export default SvgPackage;
