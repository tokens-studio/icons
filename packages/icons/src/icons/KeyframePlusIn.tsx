import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframePlusIn = ({
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
			d='M13.8514 8.89682L8.98665 14.248C8.45765 14.83 7.54245 14.83 7.01345 14.248L2.14875 8.89682C1.68642 8.38828 1.68642 7.61162 2.14875 7.10308L7.01345 1.75186C7.54245 1.16995 8.45765 1.16995 8.98665 1.75186L13.8514 7.10308C14.3137 7.61162 14.3137 8.38828 13.8514 8.89682Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 8H8M8 8H10M8 8V6M8 8V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgKeyframePlusIn;
