import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDogecoinRotateOut = ({
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
			d='M1.92102 10.6667C2.94977 13.0212 5.29921 14.6667 8.03298 14.6667C11.4898 14.6667 14.3322 12.0356 14.6667 8.66669'
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
			d='M6.66663 10.9347V5.06555C6.66663 4.84463 6.84523 4.666 7.06609 4.66284C8.72663 4.63915 11 4.61451 11 8.00004C11 11.3856 8.72663 11.361 7.06609 11.3374C6.84523 11.3342 6.66663 11.1556 6.66663 10.9347Z'
			stroke='currentColor'
		/>
		<path
			d='M5.33337 8H8.00004'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDogecoinRotateOut;
