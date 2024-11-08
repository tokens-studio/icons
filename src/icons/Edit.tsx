import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEdit = ({
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
			d='M2 14h12M8.148 3.886 10.034 2l3.3 3.3-1.886 1.885m-3.3-3.3L4.41 7.624a.67.67 0 0 0-.195.472v3.023h3.024c.176 0 .346-.07.471-.195l3.738-3.738m-3.3-3.3 3.3 3.3'
		/>
	</svg>
);
export default SvgEdit;
