import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHealthcare = ({
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
			d='m12 13.333 2.55-2.55a.4.4 0 0 0 .117-.282V7a1 1 0 0 0-2 0v3'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m12 10.667.572-.572a.323.323 0 0 0-.084-.518l-.295-.147a1.33 1.33 0 0 0-1.54.25l-.596.596c-.25.25-.39.59-.39.943v2.114M4 13.333l-2.55-2.55a.4.4 0 0 1-.117-.282V7a1 1 0 1 1 2 0v3'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m4 10.667-.572-.572a.323.323 0 0 1 .084-.518l.295-.147a1.33 1.33 0 0 1 1.54.25l.596.596c.25.25.39.59.39.943v2.114M9.111 8H6.89V6.444H5.333V4.222H6.89V2.667H9.11v1.555h1.556v2.222H9.11z'
		/>
	</svg>
);
export default SvgHealthcare;
