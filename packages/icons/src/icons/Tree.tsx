import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTree = ({
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
			d='M8 14.6667V9.33341M8 9.33341V6.66675M8 9.33341L10.6667 8.00008'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3334 4.66659C11.3334 2.82564 9.84095 1.33325 8.00002 1.33325C6.15907 1.33325 4.66669 2.82564 4.66669 4.66659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99998 12.0001H4.99998C2.97493 12.0001 1.33331 10.3585 1.33331 8.33341C1.33331 6.30837 2.97493 4.66675 4.99998 4.66675H5.99998'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 12H11C13.0251 12 14.6667 10.3584 14.6667 8.33333C14.6667 6.42068 13.2022 4.85005 11.3333 4.68164'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTree;
