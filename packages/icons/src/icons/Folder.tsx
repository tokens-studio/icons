import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolder = ({
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
			d='M1.33337 7.33335V3.06669C1.33337 2.84577 1.51246 2.66669 1.73337 2.66669H5.85207C5.94755 2.66669 6.03989 2.70085 6.11239 2.76299L8.22104 4.57039C8.29351 4.63253 8.38584 4.66669 8.48137 4.66669H14.2667C14.4876 4.66669 14.6667 4.84577 14.6667 5.06669V7.33335M1.33337 7.33335V12.9334C1.33337 13.1543 1.51246 13.3334 1.73337 13.3334H14.2667C14.4876 13.3334 14.6667 13.1543 14.6667 12.9334V7.33335M1.33337 7.33335H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgFolder;
