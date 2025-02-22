import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgEthereumRotateOut = ({
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
			d='M14.1119 5.33331C13.0831 2.97877 10.7337 1.33331 7.99993 1.33331C4.54306 1.33331 1.70069 3.96443 1.36621 7.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 5.33335H14.2667C14.4876 5.33335 14.6667 5.15427 14.6667 4.93335V2.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.9209 10.6667C2.94965 13.0212 5.29909 14.6667 8.03286 14.6667C11.4897 14.6667 14.3321 12.0356 14.6666 8.66669'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.03288 10.6667H1.76621C1.5453 10.6667 1.36621 10.8458 1.36621 11.0667V13.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 7.99998L8.00008 12.6666L11.3334 7.99998M4.66675 7.99998L8.00008 3.33331M4.66675 7.99998L8.00008 8.66665M11.3334 7.99998L8.00008 3.33331M11.3334 7.99998L8.00008 8.66665M8.00008 3.33331V8.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgEthereumRotateOut;
