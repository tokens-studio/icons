import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGithub = ({
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
			d='M10.667 14.685V12.77a2.25 2.25 0 0 0-.627-1.74c2.093-.233 4.293-1.026 4.293-4.666 0-.931-.358-1.826-1-2.5a3.38 3.38 0 0 0-.06-2.514s-.786-.233-2.606.987a8.9 8.9 0 0 0-4.667 0c-1.82-1.22-2.607-.987-2.607-.987a3.38 3.38 0 0 0-.06 2.514 3.63 3.63 0 0 0-1 2.52c0 3.613 2.2 4.406 4.294 4.666A2.25 2.25 0 0 0 6 12.771v1.914'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 13.351c-2 .649-3.667 0-4.667-2'
		/>
	</svg>
);
export default SvgGithub;
