import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFontWeight = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 24}
		height={props.height || 24}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (24 / (Number(props.width) || 24))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.49997 8C6.06723 8.00449 5.64761 8.14923 5.30412 8.41248C4.96063 8.67573 4.71179 9.0433 4.59497 9.46L3.09997 18.5C3.02437 18.7926 3.01606 19.0985 3.07565 19.3947C3.13525 19.691 3.2612 19.9699 3.44405 20.2105C3.6269 20.4511 3.8619 20.6471 4.13138 20.7839C4.40086 20.9206 4.69783 20.9945 4.99997 21H19C19.3086 20.9999 19.6131 20.9283 19.8895 20.7909C20.1659 20.6535 20.4068 20.454 20.5932 20.208C20.7796 19.962 20.9066 19.6762 20.9642 19.3729C21.0217 19.0697 21.0083 18.7572 20.925 18.46L19.4 9.5C19.2898 9.07341 19.0419 8.69512 18.6947 8.42388C18.3476 8.15265 17.9205 8.00364 17.48 8H6.49997Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.2 15.5H13.8M9 17.5L11.563 12.0212C11.7018 11.7244 11.7713 11.576 11.8674 11.53C11.951 11.49 12.049 11.49 12.1326 11.53C12.2287 11.576 12.2982 11.7244 12.437 12.0212L15 17.5'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFontWeight;
