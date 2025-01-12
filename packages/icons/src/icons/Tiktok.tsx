import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTiktok = ({
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
			d='M14 5.33333V10.6667C14 12.5076 12.5076 14 10.6667 14H5.33333C3.49239 14 2 12.5076 2 10.6667V5.33333C2 3.49239 3.49239 2 5.33333 2H10.6667C12.5076 2 14 3.49239 14 5.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66675 8C5.56218 8 4.66675 8.8954 4.66675 10C4.66675 11.1046 5.56218 12 6.66675 12C7.77135 12 8.66675 11.1046 8.66675 10V4C8.88895 4.66667 9.73341 6 11.3334 6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTiktok;
