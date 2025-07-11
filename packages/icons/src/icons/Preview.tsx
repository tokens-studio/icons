import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPreview = ({
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
			d='M3 7V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V7M3 17V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V17M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM18.944 12.33C19.0187 12.1164 19.0187 11.8837 18.944 11.67C18.381 10.2905 17.4198 9.10985 16.183 8.27879C14.9463 7.44774 13.49 7.00391 12 7.00391C10.51 7.00391 9.05369 7.44774 7.81693 8.27879C6.58018 9.10985 5.619 10.2905 5.05599 11.67C4.9813 11.8837 4.9813 12.1164 5.05599 12.33C5.619 13.7096 6.58018 14.8902 7.81693 15.7213C9.05369 16.5523 10.51 16.9962 12 16.9962C13.49 16.9962 14.9463 16.5523 16.183 15.7213C17.4198 14.8902 18.381 13.7096 18.944 12.33Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPreview;
