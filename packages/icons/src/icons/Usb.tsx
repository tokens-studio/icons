import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUsb = ({
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
			d='M8.33325 1.33325V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.33325 9.33341L11.9999 8.00008V5.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.33341 10.6667L4.66675 9.66675V7.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.33341 14.6666C9.25388 14.6666 10.0001 13.9204 10.0001 12.9999C10.0001 12.0795 9.25388 11.3333 8.33341 11.3333C7.41295 11.3333 6.66675 12.0795 6.66675 12.9999C6.66675 13.9204 7.41295 14.6666 8.33341 14.6666Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 3.66675V5.66675H13V3.66675H11Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7 2.66659L8.33333 1.33325L9.66667 2.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66659 7.33341C5.40297 7.33341 5.99992 6.73648 5.99992 6.00008C5.99992 5.2637 5.40297 4.66675 4.66659 4.66675C3.93021 4.66675 3.33325 5.2637 3.33325 6.00008C3.33325 6.73648 3.93021 7.33341 4.66659 7.33341Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUsb;
