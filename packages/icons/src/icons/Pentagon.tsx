import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPentagon = ({
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
			d='M7.76484 1.50413C7.90504 1.40227 8.09491 1.40227 8.23511 1.50413L14.7392 6.2297C14.8794 6.33156 14.9381 6.5121 14.8846 6.67691L12.4002 14.323C12.3466 14.4878 12.193 14.5994 12.0198 14.5994H3.98017C3.80688 14.5994 3.6533 14.4878 3.59974 14.323L1.11537 6.67691C1.06182 6.5121 1.12048 6.33156 1.26068 6.2297L7.76484 1.50413Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPentagon;
