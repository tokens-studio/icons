import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHealthShield = ({
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
			d='M9.111 10.667H6.89V9.11H5.333V6.89H6.89V5.333H9.11V6.89h1.556V9.11H9.11z'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.333 12 2.087 3.275a.664.664 0 0 1 .516-.742L7.71 1.398c.19-.043.388-.043.578 0l5.108 1.135c.34.075.565.397.516.742L12.667 12c-.047.33-.334 2.333-4.667 2.333S3.38 12.33 3.333 12'
		/>
	</svg>
);
export default SvgHealthShield;
