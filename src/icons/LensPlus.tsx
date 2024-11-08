import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLensPlus = ({
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
			d='M1.995 4h2m0 0h2m-2 0V2m0 2v2M1.408 9a6.668 6.668 0 0 0 13.259-1c0-3.342-2.46-6.11-5.667-6.592'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.465 6a4 4 0 0 0-.216-.333M11.874 9A4.01 4.01 0 0 1 9 11.874'
		/>
	</svg>
);
export default SvgLensPlus;
