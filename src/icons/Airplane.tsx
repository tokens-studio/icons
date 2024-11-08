import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplane = ({
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
			d='M7 3v3.112a.4.4 0 0 1-.188.339L1.855 9.549a.4.4 0 0 0-.188.34v.599a.4.4 0 0 0 .497.388L6.503 9.79a.4.4 0 0 1 .497.388v1.973a.4.4 0 0 1-.137.3l-1.44 1.261c-.305.267-.064.767.335.695l2.17-.395a.4.4 0 0 1 .144 0l2.17.395c.4.072.64-.428.335-.695l-1.44-1.26A.4.4 0 0 1 9 12.152v-1.973a.4.4 0 0 1 .497-.388l4.34 1.085a.4.4 0 0 0 .496-.388v-.6a.4.4 0 0 0-.188-.339L9.188 6.451A.4.4 0 0 1 9 6.11V3a1 1 0 0 0-2 0'
		/>
	</svg>
);
export default SvgAirplane;
