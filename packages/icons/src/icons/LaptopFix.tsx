import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLaptopFix = ({
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
			d='M13.8667 9.48143H2.4359C2.25691 9.48143 2.09971 9.6003 2.051 9.77256L1.14647 12.9704C0.905767 13.8214 1.54509 14.6666 2.42947 14.6666H13.5705C14.4549 14.6666 15.0943 13.8214 14.8535 12.9704L13.8667 9.48143ZM13.8667 9.48143V5.40735'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.1333 9.48151V2.66671C2.1333 1.93033 2.73025 1.33337 3.46663 1.33337H8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33331 12.6666H8.66665'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.7713 3.21887L9.88562 5.10449'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.6569 3.21899C13.1362 3.73969 12.292 3.73969 11.7713 3.21899C11.2506 2.69829 11.2506 1.85407 11.7713 1.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.8856 6.99024C10.4063 6.46956 10.4063 5.62534 9.8856 5.10464C9.36487 4.58394 8.52067 4.58394 8 5.10464'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLaptopFix;
