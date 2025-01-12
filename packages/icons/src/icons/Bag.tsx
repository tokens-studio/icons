import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBag = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M3.0055 13.3333H12.9944C13.19 13.3333 13.3568 13.192 13.389 12.9991L14.589 5.7991C14.6296 5.55529 14.4416 5.33334 14.1944 5.33334H1.8055C1.55832 5.33334 1.3703 5.55529 1.41094 5.7991L2.61094 12.9991C2.64308 13.192 2.80996 13.3333 3.0055 13.3333Z'
			stroke='currentColor'
		/>
		<path
			d='M4.66669 5.33332V3.99999C4.66669 3.26361 5.26364 2.66666 6.00002 2.66666H10C10.7364 2.66666 11.3334 3.26361 11.3334 3.99999V5.33332'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgBag;
