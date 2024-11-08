import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapXmark = ({
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
			d='m6 12.667-3.474 1.158a.4.4 0 0 1-.526-.38V3.622a.4.4 0 0 1 .274-.38L6 2m0 10.667 3.474 1.158a.4.4 0 0 0 .526-.38V3.622a.4.4 0 0 0-.274-.38L6 2m0 10.667V2M10 3.333l3.473-1.158a.4.4 0 0 1 .527.38V10M11.414 14.91l1.415-1.415m0 0 1.414-1.414m-1.415 1.414-1.414-1.414m1.415 1.414 1.414 1.414'
		/>
	</svg>
);
export default SvgMapXmark;
