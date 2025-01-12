import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSmoking = ({
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
			d='M12 12.6667V14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.9999 10.6667C11.9999 10 11.3333 9.33333 9.99992 9.33333C9.79845 9.33333 9.56992 9.33333 9.33339 9.33333C8.22885 9.33333 7.33325 8.43793 7.33325 7.33333V5.66667C7.33325 4.74619 8.07945 4 8.99992 4H9.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 10.6666C14.6667 7.66659 13.3333 6.99992 12 6.66659C13.3333 6.33325 14.6667 5.99992 14.6667 3.99992C14.6667 1.99992 13 1.33325 12 1.33325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 12.6667V14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.93325 12.6667H1.73325C1.51234 12.6667 1.33325 12.8458 1.33325 13.0667V14.2667C1.33325 14.4877 1.51234 14.6667 1.73325 14.6667H8.93325C9.15417 14.6667 9.33325 14.4877 9.33325 14.2667V13.0667C9.33325 12.8458 9.15417 12.6667 8.93325 12.6667Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgSmoking;
