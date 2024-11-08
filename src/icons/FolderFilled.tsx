import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolderFilled = ({
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
			fill='currentColor'
			d='M2.531 1.875A1.53 1.53 0 0 0 1 3.406v9.188c0 .845.686 1.531 1.531 1.531H13.47A1.53 1.53 0 0 0 15 12.594V5.156a1.53 1.53 0 0 0-1.531-1.531H7.563a.22.22 0 0 1-.175-.087L6.6 2.488a1.53 1.53 0 0 0-1.225-.613z'
		/>
	</svg>
);
export default SvgFolderFilled;
