import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWalking = ({
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
			d='M8.29387 6.08472L7.35474 9.84114L10.6417 14.0671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.8852 12.189L5.47656 14.0672'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.47656 8.90209C5.47656 6.27255 7.35487 6.08472 8.29394 6.08474L9.23294 6.08472C9.38947 6.86729 10.0781 8.52642 11.5807 8.90202'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66659 4.66667C9.40299 4.66667 9.99992 4.06971 9.99992 3.33333C9.99992 2.59695 9.40299 2 8.66659 2C7.93019 2 7.33325 2.59695 7.33325 3.33333C7.33325 4.06971 7.93019 4.66667 8.66659 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWalking;
