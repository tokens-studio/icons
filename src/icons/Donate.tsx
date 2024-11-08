import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDonate = ({
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
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M10.667 4.187c0 .4-.159.786-.441 1.07-.651.656-1.283 1.34-1.958 1.973a.4.4 0 0 1-.548-.012l-1.946-1.96a1.52 1.52 0 0 1 0-2.142 1.52 1.52 0 0 1 2.155 0l.071.07.07-.07a1.518 1.518 0 0 1 2.597 1.07Z'
		/>
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
			d='m4 10.667-.572-.572a.323.323 0 0 1 .084-.518l.295-.147a1.33 1.33 0 0 1 1.54.25l.596.596c.25.25.39.59.39.943v2.114'
		/>
	</svg>
);
export default SvgDonate;
