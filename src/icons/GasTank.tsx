import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGasTank = ({
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
			strokeMiterlimit={1.5}
			strokeWidth={1.493}
			d='M2 5.041c0-.943.764-1.708 1.709-1.708h.957V2H8v1.333h1.334A4.666 4.666 0 0 1 14 7.998v4.295a1.71 1.71 0 0 1-1.709 1.708H3.71A1.71 1.71 0 0 1 2 12.293z'
			clipRule='evenodd'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeMiterlimit={1.5}
			strokeWidth={1.502}
			d='m5.333 5.919 5.334 5.491L8 8.663m0 0L5.333 11.41M8 8.663l2.667-2.747'
		/>
	</svg>
);
export default SvgGasTank;
