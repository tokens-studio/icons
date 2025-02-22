import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMotorcycle = ({
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
			d='M4.33341 12.6667C5.80617 12.6667 7.00008 11.4728 7.00008 10C7.00008 8.52731 5.80617 7.33337 4.33341 7.33337C2.86065 7.33337 1.66675 8.52731 1.66675 10C1.66675 11.4728 2.86065 12.6667 4.33341 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.6667 10L11.6667 4.00004L12.3334 3.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6667 5.66663H8.66675L5.66675 7.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66675 10.3333H9.00008L9.66675 8.66663L12.0001 5.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66667 6.66663C5.33333 5.66663 3.33333 5.66663 2 6.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.6667 12.6667C15.1394 12.6667 16.3333 11.4728 16.3333 10C16.3333 8.52731 15.1394 7.33337 13.6667 7.33337C12.1939 7.33337 11 8.52731 11 10C11 11.4728 12.1939 12.6667 13.6667 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMotorcycle;
