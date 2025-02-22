import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVehicleGreen = ({
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
			d='M4.66663 6.66675H9.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4 9.33325H4.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 9.33325H10.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.00004 12H1.33337V13.6C1.33337 13.8209 1.51246 14 1.73337 14H3.60004C3.82095 14 4.00004 13.8209 4.00004 13.6V12ZM4.00004 12H8.66671'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M1.33337 12.0001V7.60708C1.33337 7.42655 1.37005 7.24781 1.44118 7.08188L2.98704 3.47485C3.19715 2.98461 3.6792 2.66675 4.21257 2.66675H10.4542C10.9876 2.66675 11.4696 2.98461 11.6797 3.47485L13.2256 7.08188C13.2967 7.24781 13.3334 7.42655 13.3334 7.60708V8.33341'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M11.3334 15.3333C11.3334 15.3333 11.9334 13.2549 13.3334 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.2015 14.2831L13.1118 14.2915C11.9839 14.3975 10.9794 13.5695 10.8681 12.4421C10.7569 11.3147 11.581 10.3148 12.709 10.2088L14.6994 10.0218C14.8271 10.0098 14.9408 10.1035 14.9534 10.2311L15.1232 11.9518C15.2393 13.1287 14.3789 14.1725 13.2015 14.2831Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgVehicleGreen;
