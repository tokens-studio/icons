import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWeightAlt = ({
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
			d='M11 3.333h2.6c.22 0 .4.18.4.4V13.6a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4V3.733c0-.22.18-.4.4-.4H5'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m10.852 4.22.137-.821a.4.4 0 0 0 0-.132l-.137-.82a1.33 1.33 0 0 0-1.315-1.114H6.463c-.652 0-1.208.471-1.315 1.114l-.137.82a.4.4 0 0 0 0 .132l.137.82a1.33 1.33 0 0 0 1.315 1.114h3.074c.652 0 1.208-.471 1.315-1.114M8 5.333l-.667-1.666M4.667 11.333h6.666'
		/>
	</svg>
);
export default SvgWeightAlt;
