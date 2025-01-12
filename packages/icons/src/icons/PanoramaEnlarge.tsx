import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPanoramaEnlarge = ({
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
			d='M8.00008 3.33337C9.99688 3.33337 12.8237 3.79473 13.7177 3.94985C13.8875 3.97933 14.0157 4.1142 14.0374 4.28523C14.1245 4.9706 14.3334 6.74631 14.3334 8.00004C14.3334 9.25377 14.1245 11.0295 14.0374 11.7148C14.0157 11.8859 13.8875 12.0208 13.7177 12.0502C12.8237 12.2054 9.99688 12.6667 8.00008 12.6667C6.0033 12.6667 3.1765 12.2054 2.28248 12.0502C2.11262 12.0208 1.98443 11.8859 1.96271 11.7148C1.87567 11.0295 1.66675 9.25377 1.66675 8.00004C1.66675 6.74631 1.87567 4.9706 1.96271 4.28523C1.98443 4.1142 2.11263 3.97932 2.28249 3.94985C3.1765 3.79473 6.0033 3.33337 8.00008 3.33337Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPanoramaEnlarge;
