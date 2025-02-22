import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgChurchSide = ({
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
			d='M5.05051 4.94949C5.20672 4.79328 5.45999 4.79328 5.61619 4.94949L7.88289 7.21618C7.95789 7.29118 8.00002 7.39292 8.00002 7.49898V14.2667C8.00002 14.4876 7.82095 14.6667 7.60002 14.6667H3.06669C2.84577 14.6667 2.66669 14.4876 2.66669 14.2667V7.49898C2.66669 7.39292 2.70883 7.29118 2.78385 7.21618L5.05051 4.94949Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33333 4.66665V2.66665M5.33333 2.66665V1.33331M5.33333 2.66665H4M5.33333 2.66665H6.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99998 14.6667H12.9333C13.1542 14.6667 13.3333 14.4876 13.3333 14.2667V7.16569C13.3333 7.05962 13.2912 6.95789 13.2162 6.88289L11.1171 4.78385C11.0421 4.70883 10.9404 4.66669 10.8343 4.66669H5.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33331 14.6666V11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33331 8.67335L5.33998 8.66595'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgChurchSide;
