import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleSwift = ({
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
			d='M13.638 9.726c.297-.958.967-4.5-3.954-7.659a.424.424 0 0 0-.538.067.395.395 0 0 0-.014.527c.02.023 1.833 2.232 1.188 4.756C9.205 6.649 4.77 3.135 4.77 3.135l2.562 4.198-4.759-3.066s3.364 4.13 5.423 5.683c-.996.358-3.162.737-6.022-1.04a.425.425 0 0 0-.514.049.395.395 0 0 0-.07.495c.095.159 2.388 3.88 7.235 3.88 1.33 0 2.107-.38 2.732-.683.384-.186.688-.334 1.018-.334.825 0 1.365.818 1.37.825.077.12.211.191.354.191l.035-.001a.41.41 0 0 0 .35-.247c.595-1.382-.43-2.846-.847-3.359'
		/>
	</svg>
);
export default SvgAppleSwift;
