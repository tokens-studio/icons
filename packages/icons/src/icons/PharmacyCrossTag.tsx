import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPharmacyCrossTag = ({
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
			d='M9.26667 12H6.73333C6.51242 12 6.33333 11.8209 6.33333 11.6V10.0667C6.33333 9.84573 6.15425 9.66667 5.93333 9.66667H4.4C4.17909 9.66667 4 9.4876 4 9.26667V6.73333C4 6.51242 4.17909 6.33333 4.4 6.33333H5.93333C6.15425 6.33333 6.33333 6.15425 6.33333 5.93333V4.4C6.33333 4.17909 6.51242 4 6.73333 4H9.26667C9.4876 4 9.66667 4.17909 9.66667 4.4V5.93333C9.66667 6.15425 9.84573 6.33333 10.0667 6.33333H11.6C11.8209 6.33333 12 6.51242 12 6.73333V9.26667C12 9.4876 11.8209 9.66667 11.6 9.66667H10.0667C9.84573 9.66667 9.66667 9.84573 9.66667 10.0667V11.6C9.66667 11.8209 9.4876 12 9.26667 12Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgPharmacyCrossTag;
