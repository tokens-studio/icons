import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBathroom = ({
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
			d='M14 8.66666V10.6667C14 12.1394 12.8061 13.3333 11.3333 13.3333H4.66667C3.19391 13.3333 2 12.1394 2 10.6667V9.06666C2 8.84572 2.17909 8.66666 2.4 8.66666H14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 13.3333L11.3333 14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33329 13.3333L4.66663 14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 8.66667V4.66667C14 3.19391 12.8061 2 11.3333 2H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.2667 5.33333H5.73336C5.51244 5.33333 5.33596 5.15447 5.36013 4.93487C5.4575 4.05026 5.90875 2 8 2C10.0913 2 10.5425 4.05026 10.6399 4.93487C10.6641 5.15446 10.4876 5.33333 10.2667 5.33333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBathroom;
