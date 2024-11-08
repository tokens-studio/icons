import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEvPlugCharging = ({
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
			d='M6.667 8.77V14M10 5.59v1.846c0 .736-.597 1.333-1.333 1.333h-4a1.333 1.333 0 0 1-1.334-1.333V5.59c0-.737.597-1.334 1.334-1.334h4c.736 0 1.333.597 1.333 1.334ZM8.889 4.256V2M4.444 4.256V2'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m11.111 10.667-1.111 2h2.667l-1.111 2'
		/>
	</svg>
);
export default SvgEvPlugCharging;
