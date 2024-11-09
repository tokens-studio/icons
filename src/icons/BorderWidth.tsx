import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBorderWidth = ({
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
			d='M1.914 1.917h12.158v1.5H1.914zM1.914 6.046h12.158v2.5H1.914zM1.914 11.175h12.158v3.5H1.914z'
		/>
	</svg>
);
export default SvgBorderWidth;
