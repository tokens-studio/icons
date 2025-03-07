import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTruckGreen = ({
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
			d='M4.66671 11.3334C5.40309 11.3334 6.00004 10.7365 6.00004 10.0001C6.00004 9.26368 5.40309 8.66675 4.66671 8.66675C3.93033 8.66675 3.33337 9.26368 3.33337 10.0001C3.33337 10.7365 3.93033 11.3334 4.66671 11.3334Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33337 10.0001V3.06675C9.33337 2.84583 9.15431 2.66675 8.93337 2.66675H1.73337C1.51246 2.66675 1.33337 2.84583 1.33337 3.06675V9.60008C1.33337 9.82101 1.51246 10.0001 1.73337 10.0001H3.10004'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M9.3332 10H6.0332' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M9.33337 4.66675H13.0734C13.2315 4.66675 13.3748 4.75984 13.439 4.90429L14.2989 6.83915C14.3216 6.89035 14.3334 6.94568 14.3334 7.00161V8.00008'
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
export default SvgTruckGreen;
