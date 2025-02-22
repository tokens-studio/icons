import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBusGreen = ({
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
			d='M4.66669 10.6733L4.67335 10.6659'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 8H2V12.6667C2 13.0349 2.29848 13.3333 2.66667 13.3333H8.66667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 15.3333C11.3333 15.3333 11.9333 13.2549 13.3333 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.2015 14.283L13.1118 14.2915C11.9839 14.3974 10.9794 13.5694 10.8681 12.442C10.7569 11.3146 11.581 10.3147 12.709 10.2087L14.6994 10.0217C14.8271 10.0097 14.9408 10.1035 14.9534 10.2311L15.1232 11.9517C15.2393 13.1286 14.3789 14.1724 13.2015 14.283Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 5.33334V4.00001C14 2.52725 12.8061 1.33334 11.3333 1.33334H4.66667C3.19391 1.33334 2 2.52725 2 4.00001V5.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66669 5.33334H11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3 13.3333V14.6C3 14.8209 3.17909 15 3.4 15H5.26667C5.48758 15 5.66667 14.8209 5.66667 14.6V13.3333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgBusGreen;
