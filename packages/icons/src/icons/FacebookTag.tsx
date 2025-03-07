import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFacebookTag = ({
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
			d='M7.33337 14C7.33337 12 7.33337 9.99998 7.33337 7.99998C7.33337 6.54165 7.66671 5.33331 10 5.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 8.66669H7.33333H10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFacebookTag;
