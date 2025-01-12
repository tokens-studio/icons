import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBrainWarning = ({
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
			d='M4.66675 9.33334C3.56218 9.33334 2.66675 10.2287 2.66675 11.3333C2.66675 12.4379 3.56218 13.3333 4.66675 13.3333C4.90051 13.3333 5.12489 13.2932 5.33341 13.2195'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.84251 10.4031C1.94943 9.97212 1.33325 9.05799 1.33325 7.99999C1.33325 7.19219 1.69241 6.46833 2.25975 5.97931'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.28035 5.92548C2.10327 5.66074 2 5.34243 2 5.00001C2 4.07954 2.74619 3.33334 3.66667 3.33334C4.04194 3.33334 4.38825 3.45737 4.66683 3.66668'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00008 3.00001C8.00008 2.07954 7.25388 1.33334 6.33341 1.33334C5.41294 1.33334 4.66675 2.07954 4.66675 3.00001C4.66675 3.25403 4.72357 3.49478 4.82521 3.71023'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33325 13.3333C5.33325 14.0697 5.93021 14.6667 6.66659 14.6667C7.40299 14.6667 7.99992 14.0697 7.99992 13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3334 9.33334C12.438 9.33334 13.3334 10.2287 13.3334 11.3333C13.3334 12.4379 12.438 13.3333 11.3334 13.3333C11.0997 13.3333 10.8753 13.2932 10.6667 13.2195'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.1575 10.4031C14.0505 9.97212 14.6667 9.05799 14.6667 7.99999C14.6667 7.19219 14.3075 6.46833 13.7402 5.97931'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.7197 5.92548C13.8968 5.66074 14.0001 5.34243 14.0001 5.00001C14.0001 4.07954 13.2539 3.33334 12.3334 3.33334C11.9581 3.33334 11.6118 3.45737 11.3333 3.66668'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 3.00001C8 2.07954 8.7462 1.33334 9.66667 1.33334C10.5871 1.33334 11.3333 2.07954 11.3333 3.00001C11.3333 3.25403 11.2765 3.49478 11.1749 3.71023'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 13.3333C10.6667 14.0697 10.0697 14.6667 9.33333 14.6667C8.59693 14.6667 8 14.0697 8 13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 5.33334V8.00001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 10.6733L8.00667 10.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBrainWarning;
