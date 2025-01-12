import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPenTabletConnectUsb = ({
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
			d='M14.6666 4.66667V3.33333C14.6666 2.59695 14.0697 2 13.3333 2H2.66665C1.93027 2 1.33331 2.59695 1.33331 3.33333V12.6667C1.33331 13.4031 1.93027 14 2.66665 14H13.3333C14.0697 14 14.6666 13.4031 14.6666 12.6667V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M1.33331 8H3.99998' stroke='currentColor' />
		<path d='M4 2V14' stroke='currentColor' />
		<path
			d='M12.8333 8H7.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.4667 8L11.9167 10H10.8167'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.7333 8L11 6H9.71667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 8.00001C14.6666 7.49794 14.2562 7.09094 13.75 7.09094C13.2437 7.09094 12.8333 7.49794 12.8333 8.00001C12.8333 8.50208 13.2437 8.90908 13.75 8.90908C14.2562 8.90908 14.6666 8.50208 14.6666 8.00001Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPenTabletConnectUsb;
