import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBrightStar = ({
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
			d='M7.63495 7.41514L8.67393 5.2121C8.80733 4.9293 9.19267 4.9293 9.32607 5.2121L10.3651 7.41514L12.6886 7.7706C12.9867 7.8162 13.1055 8.19973 12.8897 8.41973L11.2087 10.1334L11.6054 12.5543C11.6563 12.8652 11.3445 13.1023 11.0778 12.9554L9 11.8118L6.92219 12.9554C6.65544 13.1023 6.34364 12.8652 6.39458 12.5543L6.7913 10.1334L5.1103 8.41973C4.89447 8.19973 5.01329 7.8162 5.31141 7.7706L7.63495 7.41514Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M15.6667 9H16.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 2.33332V1.66666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9 16.3333V15.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.3334 14.3333L13.6667 13.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.3334 3.66666L13.6667 4.33332'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66675 14.3333L4.33341 13.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66675 3.66666L4.33341 4.33332'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66675 9H2.33341'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBrightStar;
