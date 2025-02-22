import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFlare = ({
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
			d='M7.63751 1.77674C7.78111 1.46895 8.21884 1.46895 8.36244 1.77674L10.2718 5.86821C10.3115 5.95335 10.38 6.02179 10.4651 6.06153L14.5566 7.97088C14.8644 8.11448 14.8644 8.55222 14.5566 8.69582L10.4651 10.6051C10.38 10.6449 10.3115 10.7134 10.2718 10.7985L8.36244 14.89C8.21884 15.1978 7.78111 15.1978 7.63751 14.89L5.72816 10.7985C5.68842 10.7134 5.61998 10.6449 5.53484 10.6051L1.44337 8.69582C1.13558 8.55222 1.13558 8.11448 1.44337 7.97088L5.53484 6.06153C5.61998 6.02179 5.68842 5.95335 5.72816 5.86821L7.63751 1.77674Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFlare;
