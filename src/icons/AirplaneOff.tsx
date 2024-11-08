import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplaneOff = ({
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
			d='M6.587 6.591 1.855 9.55a.4.4 0 0 0-.188.34v.599a.4.4 0 0 0 .497.388L6.503 9.79a.4.4 0 0 1 .497.388v1.973a.4.4 0 0 1-.137.3l-1.44 1.261c-.305.267-.064.767.335.695l2.17-.395a.4.4 0 0 1 .143 0l2.17.395c.4.072.641-.428.336-.695l-1.44-1.26A.4.4 0 0 1 9 12.152v-1.973a.4.4 0 0 1 .497-.388l.305.076M7 5V3a1 1 0 0 1 2 0v3.112a.4.4 0 0 0 .188.339l4.957 3.098a.4.4 0 0 1 .188.34v.599a.4.4 0 0 1-.497.388L12.5 10.54M2 2l12 12'
		/>
	</svg>
);
export default SvgAirplaneOff;
