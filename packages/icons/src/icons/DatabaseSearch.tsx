import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseSearch = ({
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
			d='M13.6666 13.6667L14.6666 14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 12.3334C10.6666 13.2538 11.4128 14 12.3333 14C12.7944 14 13.2116 13.8128 13.5134 13.5103C13.814 13.2088 14 12.7928 14 12.3334C14 11.4129 13.2538 10.6667 12.3333 10.6667C11.4128 10.6667 10.6666 11.4129 10.6666 12.3334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.66663 4V8C2.66663 8 2.66663 10 7.33329 10C12 10 12 8 12 8V4'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33329 2C12 2 12 4 12 4C12 4 12 6 7.33329 6C2.66663 6 2.66663 4 2.66663 4C2.66663 4 2.66663 2 7.33329 2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33329 14C2.66663 14 2.66663 12 2.66663 12V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDatabaseSearch;
