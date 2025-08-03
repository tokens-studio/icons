import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTypography = ({
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
			d='M4.00012 6.99994C4.00012 6.06806 4.00012 5.60211 4.15236 5.23457C4.35535 4.74452 4.7447 4.35517 5.23476 4.15218C5.6023 3.99994 6.06824 3.99994 7.00012 3.99994H17.0001C17.932 3.99994 18.3979 3.99994 18.7655 4.15218C19.2555 4.35517 19.6449 4.74452 19.8479 5.23457C20.0001 5.60211 20.0001 6.06806 20.0001 6.99994M9.00012 19.9999H15.0001M12.0001 3.99994V19.9999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTypography;
