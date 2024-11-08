import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDollar = ({
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
			d='M10.77 4.77c-.633-.633-1.747-1.073-2.77-1.1m0 0c-1.218-.033-2.308.518-2.308 2.022 0 2.77 5.077 1.385 5.077 4.154 0 1.58-1.351 2.258-2.769 2.207M8 3.67V2m-2.77 8.77c.596.792 1.702 1.245 2.77 1.283m0 0V14'
		/>
	</svg>
);
export default SvgDollar;
