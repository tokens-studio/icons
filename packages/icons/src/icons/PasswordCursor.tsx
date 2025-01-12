import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPasswordCursor = ({
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
			d='M14 8.66667V5.33333C14 4.59695 13.4031 4 12.6667 4H3.33333C2.59695 4 2 4.59695 2 5.33333V9.33333C2 10.0697 2.59695 10.6667 3.33333 10.6667H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M13.9194 11.2782C14.2486 11.4807 14.2283 11.9736 13.8892 12.012L12.1782 12.206L11.4107 13.7475C11.2586 14.053 10.7886 13.9034 10.7108 13.5248L9.87397 9.4475C9.8083 9.1275 10.0959 8.9261 10.3741 9.0973L13.9194 11.2782Z'
			stroke='currentColor'
		/>
		<path
			d='M8 7.34004L8.00667 7.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 7.34004L10.6734 7.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 7.34004L5.33992 7.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPasswordCursor;
