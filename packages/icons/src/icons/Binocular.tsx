import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBinocular = ({
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
			d='M14.3334 9.33334L13.3334 6.00001C13.3334 6.00001 13.0001 4.66668 11.6667 4.66668C11.6667 4.66668 11.6667 3.33334 10.3334 3.33334C9.00008 3.33334 9.00008 4.66668 9.00008 4.66668H7.00008C7.00008 4.66668 7.00008 3.33334 5.66675 3.33334C4.33341 3.33334 4.33341 4.66668 4.33341 4.66668C3.00008 4.66668 2.66675 6.00001 2.66675 6.00001L1.66675 9.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.99992 13.3333C5.47268 13.3333 6.66658 12.1394 6.66658 10.6667C6.66658 9.19393 5.47268 8 3.99992 8C2.52716 8 1.33325 9.19393 1.33325 10.6667C1.33325 12.1394 2.52716 13.3333 3.99992 13.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.9999 13.3333C13.4727 13.3333 14.6666 12.1394 14.6666 10.6667C14.6666 9.19393 13.4727 8 11.9999 8C10.5272 8 9.33325 9.19393 9.33325 10.6667C9.33325 12.1394 10.5272 13.3333 11.9999 13.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 10.6667C8.73648 10.6667 9.33341 10.0697 9.33341 9.33333C9.33341 8.59693 8.73648 8 8.00008 8C7.26368 8 6.66675 8.59693 6.66675 9.33333C6.66675 10.0697 7.26368 10.6667 8.00008 10.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBinocular;
