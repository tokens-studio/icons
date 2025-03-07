import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBitcoinRotateOut = ({
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
			d='M14.1119 5.33334C13.0831 2.9788 10.7337 1.33334 7.99993 1.33334C4.54306 1.33334 1.70069 3.96446 1.36621 7.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 5.33332H14.2667C14.4876 5.33332 14.6667 5.15424 14.6667 4.93332V2.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.92096 10.6667C2.94971 13.0212 5.29915 14.6667 8.03292 14.6667C11.4898 14.6667 14.3322 12.0355 14.6667 8.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.03288 10.6667H1.76621C1.5453 10.6667 1.36621 10.8457 1.36621 11.0667V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 7.99999C6.00005 8.56106 6 10.0713 6 10.9294C6 11.1503 6.17909 11.3295 6.39999 11.3308C8.37747 11.3424 10 11.3813 10 9.66666C10 7.83759 8 7.99999 6 7.99999ZM6 7.99999L6.00002 5.0706C6.00002 4.84968 6.17911 4.67046 6.40003 4.66917C8.37747 4.6576 10 4.61865 10 6.33333C10 8.16239 8 7.99999 6 7.99999Z'
			stroke='currentColor'
		/>
		<path
			d='M8 4.66666V3.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 12.3333V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBitcoinRotateOut;
