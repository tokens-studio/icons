import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPagePlusIn = ({
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
			d='M6 8H8M8 8H10M8 8V6M8 8V10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66663 14.2667V1.73337C2.66663 1.51246 2.84571 1.33337 3.06663 1.33337H10.8343C10.9404 1.33337 11.0421 1.37551 11.1171 1.45053L13.2162 3.54955C13.2912 3.62457 13.3333 3.72631 13.3333 3.83239V14.2667C13.3333 14.4876 13.1542 14.6667 12.9333 14.6667H3.06663C2.84571 14.6667 2.66663 14.4876 2.66663 14.2667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 1.33337V3.60004C10.6666 3.82095 10.8457 4.00004 11.0666 4.00004H13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPagePlusIn;
