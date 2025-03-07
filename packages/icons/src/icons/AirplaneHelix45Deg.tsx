import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAirplaneHelix45Deg = ({
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
			d='M9.41374 9.4142C10.1947 8.63313 10.1947 7.36687 9.41374 6.58579C8.63268 5.80474 7.36634 5.80474 6.5853 6.58579C5.80425 7.36687 5.80425 8.63313 6.5853 9.4142C7.36634 10.1953 8.63268 10.1953 9.41374 9.4142Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M6.58582 6.58575C6.58582 6.58575 4.71764 6.59188 3.75739 5.64294C2.81836 4.70296 1.84774 3.78042 2.81458 2.81451C3.73335 1.89669 4.68748 2.80461 5.64301 3.75733C6.58016 4.69165 6.58582 6.58575 6.58582 6.58575Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M9.41431 6.58579C9.41431 6.58579 9.40817 4.71761 10.3571 3.75736C11.2971 2.81833 12.2196 1.84771 13.1855 2.81455C14.1034 3.73332 13.1954 4.68745 12.2427 5.64298C11.3084 6.58013 9.41431 6.58579 9.41431 6.58579Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M6.58569 9.4142C6.58569 9.4142 6.59182 11.2824 5.64288 12.2427C4.7029 13.1817 3.78036 14.1523 2.81445 13.1855C1.89663 12.2667 2.80455 11.3125 3.75727 10.357C4.69159 9.41987 6.58569 9.4142 6.58569 9.4142Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M9.41418 9.41426C9.41418 9.41426 11.2824 9.40813 12.2427 10.3571C13.1817 11.2971 14.1523 12.2196 13.1855 13.1855C12.2667 14.1033 11.3125 13.1954 10.357 12.2427C9.41985 11.3083 9.41418 9.41426 9.41418 9.41426Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAirplaneHelix45Deg;
