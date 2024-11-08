import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolderOpenFilled = ({
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
			fill='currentColor'
			d='M.824 2.898c0-.68.552-1.232 1.232-1.232h3.498c.408 0 .788.201 1.018.538l.989 1.452a.18.18 0 0 0 .145.078h4.38c.68 0 1.232.55 1.232 1.231v.083H3.222a.597.597 0 0 0 0 1.193H14.12a.704.704 0 0 1 .7.775l-.624 6.086c-.075.74-.552 1.232-1.232 1.232H2.056a1.23 1.23 0 0 1-1.232-1.232z'
		/>
	</svg>
);
export default SvgFolderOpenFilled;
