import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSnapchat = ({
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
		<path d='M16 0H0V16H16V0Z' fill='white' />
		<path
			d='M12 5.83328C12 -0.16677 4 -0.166744 4 5.83328V6.83325H2.91487C2.52574 6.83325 2.36572 7.33258 2.68237 7.55878L4 8.49992C3.77778 9.27772 2.86667 10.9666 1 11.4999C1.22222 11.8333 1.86667 12.4999 2.66667 12.4999L3.33333 13.4999L5 13.1666C5.55555 13.6111 6.93333 14.4999 8 14.4999C9.06667 14.4999 10.4445 13.6111 11 13.1666L12.6667 13.4999L13.3333 12.4999C14.1333 12.4999 14.7778 11.8333 15 11.4999C13.1333 10.9666 12.2222 9.27772 12 8.49992L13.3176 7.55878C13.6343 7.33258 13.4743 6.83325 13.0851 6.83325H12V5.83328Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSnapchat;
