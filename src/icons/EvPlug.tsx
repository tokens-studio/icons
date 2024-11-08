import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEvPlug = ({
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
			strokeWidth={1.5}
			d='M8 8.77V14M11.333 5.59v1.846c0 .736-.597 1.333-1.333 1.333H6a1.333 1.333 0 0 1-1.333-1.333V5.59c0-.737.597-1.334 1.333-1.334h4c.736 0 1.333.597 1.333 1.334ZM10.222 4.256V2M5.778 4.256V2'
		/>
	</svg>
);
export default SvgEvPlug;
