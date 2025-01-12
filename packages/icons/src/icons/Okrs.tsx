import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOkrs = ({
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
			d='M12.0001 9.33329C12.7365 9.33329 13.3334 8.73636 13.3334 7.99996C13.3334 7.26356 12.7365 6.66663 12.0001 6.66663C11.2637 6.66663 10.6667 7.26356 10.6667 7.99996C10.6667 8.73636 11.2637 9.33329 12.0001 9.33329Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.0001 4.66667C12.7365 4.66667 13.3334 4.06971 13.3334 3.33333C13.3334 2.59695 12.7365 2 12.0001 2C11.2637 2 10.6667 2.59695 10.6667 3.33333C10.6667 4.06971 11.2637 4.66667 12.0001 4.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 3.33337H8.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 8H8.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 12.6666H8.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 14.1618L12.0809 12.7476M12.0809 12.7476L13.4951 11.3334M12.0809 12.7476L10.6667 11.3334M12.0809 12.7476L13.4951 14.1618'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgOkrs;
