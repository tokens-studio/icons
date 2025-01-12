import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDewPoint = ({
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
			d='M3.33333 7.99969C2.5237 8.60783 2 9.57609 2 10.6666C2 12.5076 3.49239 14 5.33333 14C7.17427 14 8.66667 12.5076 8.66667 10.6666C8.66667 9.57609 8.14293 8.60783 7.33333 7.99969'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33325 8V2H7.33325V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33325 2H8.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33325 4H8.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33325 6H8.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33333 9.33333C4.59695 9.33333 4 9.93027 4 10.6667C4 11.4031 4.59695 12 5.33333 12C6.06971 12 6.66667 11.4031 6.66667 10.6667C6.66667 9.93027 6.06971 9.33333 5.33333 9.33333ZM5.33333 9.33333V6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M12.6661 2C12.6661 2 14.6661 3.99557 14.6663 5.25768C14.6665 6.36147 13.7702 7.25767 12.6665 7.25767C11.5629 7.25767 10.6747 6.36147 10.6667 5.25768C10.6733 3.99495 12.6661 2 12.6661 2Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDewPoint;
