import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDelivery = ({
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
			d='M1.333 2.667H12c.736 0 1.333.597 1.333 1.333v8c0 .736-.597 1.333-1.333 1.333H4A1.333 1.333 0 0 1 2.667 12V8M8 6V2.667M5.333 5.333H2'
		/>
	</svg>
);
export default SvgDelivery;
