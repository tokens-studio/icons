import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAttachment01 = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M21.1525 10.8995L12.1369 19.9151C10.0866 21.9653 6.76253 21.9653 4.71228 19.9151C2.66203 17.8648 2.66203 14.5407 4.71228 12.4904L13.7279 3.47483C15.0947 2.108 17.3108 2.108 18.6776 3.47483C20.0445 4.84167 20.0445 7.05775 18.6776 8.42458L10.0156 17.0866C9.33216 17.7701 8.22412 17.7701 7.54071 17.0866C6.85729 16.4032 6.85729 15.2952 7.54071 14.6118L15.1421 7.01037'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAttachment01;
