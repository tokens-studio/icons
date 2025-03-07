import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBridge3D = ({
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
			d='M12 2.66666H14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66667 14C7.03487 14 7.33333 13.7015 7.33333 13.3333C7.33333 12.9651 7.03487 12.6667 6.66667 12.6667C6.29848 12.6667 6 12.9651 6 13.3333C6 13.7015 6.29848 14 6.66667 14Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33341 3.33333C9.70161 3.33333 10.0001 3.03485 10.0001 2.66667C10.0001 2.29848 9.70161 2 9.33341 2C8.96521 2 8.66675 2.29848 8.66675 2.66667C8.66675 3.03485 8.96521 3.33333 9.33341 3.33333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66675 13.3333C6.66675 13.3333 11.0001 11.6667 8.00008 7.99999C5.00008 4.33332 9.33341 2.66666 9.33341 2.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 13.3333H4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBridge3D;
