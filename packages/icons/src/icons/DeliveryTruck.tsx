import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDeliveryTruck = ({
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
			d='M6.33333 12.6667C7.06971 12.6667 7.66667 12.0697 7.66667 11.3333C7.66667 10.5969 7.06971 10 6.33333 10C5.59695 10 5 10.5969 5 11.3333C5 12.0697 5.59695 12.6667 6.33333 12.6667Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.0001 12.6667C13.7365 12.6667 14.3334 12.0697 14.3334 11.3333C14.3334 10.5969 13.7365 10 13.0001 10C12.2637 10 11.6667 10.5969 11.6667 11.3333C11.6667 12.0697 12.2637 12.6667 13.0001 12.6667Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.70008 11.3333H11.0001V4.4C11.0001 4.17909 10.821 4 10.6001 4H1.66675'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M4.76667 11.3334H3.4C3.17909 11.3334 3 11.1543 3 10.9334V7.66669'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M2.33325 6H4.99992'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 6H14.7401C14.8981 6 15.0414 6.09309 15.1056 6.23755L16.2989 8.9224C16.3216 8.9736 16.3333 9.02893 16.3333 9.08487V10.9333C16.3333 11.1543 16.1543 11.3333 15.9333 11.3333H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M11 11.3333H11.6667' stroke='currentColor' strokeLinecap='round' />
	</svg>
);
export default SvgDeliveryTruck;
