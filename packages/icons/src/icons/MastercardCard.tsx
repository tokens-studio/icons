import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMastercardCard = ({
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
			d='M14.6666 6.00004V11.3334C14.6666 12.0698 14.0697 12.6667 13.3333 12.6667H2.66659C1.93021 12.6667 1.33325 12.0698 1.33325 11.3334V4.66671C1.33325 3.93033 1.93021 3.33337 2.66659 3.33337H13.3333C14.0697 3.33337 14.6666 3.93033 14.6666 4.66671V6.00004ZM14.6666 6.00004H3.99992'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 8.92123C11.1769 8.76289 11.4105 8.66663 11.6667 8.66663C12.2189 8.66663 12.6667 9.11436 12.6667 9.66663C12.6667 10.2189 12.2189 10.6666 11.6667 10.6666C11.4105 10.6666 11.1769 10.5704 11 10.412'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.9999 8.92123C10.823 8.76289 10.5894 8.66663 10.3333 8.66663C9.78099 8.66663 9.33325 9.11436 9.33325 9.66663C9.33325 10.2189 9.78099 10.6666 10.3333 10.6666C10.5894 10.6666 10.823 10.5704 10.9999 10.412'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMastercardCard;
