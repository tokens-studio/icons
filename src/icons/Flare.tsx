import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFlare = ({
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
			d='M7.638 1.777a.4.4 0 0 1 .724 0l1.91 4.091a.4.4 0 0 0 .193.194l4.092 1.909a.4.4 0 0 1 0 .725l-4.092 1.91a.4.4 0 0 0-.193.193l-1.91 4.091a.4.4 0 0 1-.724 0l-1.91-4.091a.4.4 0 0 0-.193-.194l-4.092-1.91a.4.4 0 0 1 0-.724l4.092-1.91a.4.4 0 0 0 .193-.193z'
		/>
	</svg>
);
export default SvgFlare;
