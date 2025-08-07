import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAccessibility = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M12 10.325L14.25 18.325M12 10.325L9.75 18.325M12 10.325C9.97914 10.325 7 9.32501 7 9.32501M12 10.325C14.0209 10.325 17 9.32501 17 9.32501M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13 6.67499C13 7.22727 12.5523 7.67499 12 7.67499C11.4477 7.67499 11 7.22727 11 6.67499C11 6.1227 11.4477 5.67499 12 5.67499C12.5523 5.67499 13 6.1227 13 6.67499Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAccessibility;
