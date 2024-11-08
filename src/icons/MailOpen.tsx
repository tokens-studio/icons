import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMailOpen = ({
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
			d='M4.667 8 8 10.333 11.333 8'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 13.333V6.088c0-.468.246-.902.648-1.143l5.333-3.2c.422-.253.95-.253 1.372 0l5.333 3.2c.402.24.648.675.648 1.143v7.245c0 .737-.597 1.334-1.334 1.334H2.667a1.333 1.333 0 0 1-1.334-1.334Z'
		/>
	</svg>
);
export default SvgMailOpen;
