import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolderSettings = ({
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
			d='M1.73337 2.66669H5.85207C5.94755 2.66669 6.03989 2.70085 6.11239 2.76299L8.22104 4.57039C8.29351 4.63253 8.38584 4.66669 8.48137 4.66669H14.2667C14.4876 4.66669 14.6667 4.84577 14.6667 5.06669V6.93335C14.6667 7.15429 14.4876 7.33335 14.2667 7.33335H1.73337C1.51246 7.33335 1.33337 7.15429 1.33337 6.93335V3.06669C1.33337 2.84577 1.51246 2.66669 1.73337 2.66669Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6666 6.66669V9.33335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 6.66669V12.9334C1.33337 13.1543 1.51246 13.3334 1.73337 13.3334H8.66671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 14C13.4031 14 14 13.403 14 12.6666C14 11.9302 13.4031 11.3333 12.6667 11.3333C12.4238 11.3333 12.1962 11.3982 12 11.5117C11.6015 11.7422 11.3334 12.1731 11.3334 12.6666C11.3334 13.1602 11.6015 13.591 12 13.8216C12.1962 13.935 12.4238 14 12.6667 14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 14.6667C13.7712 14.6667 14.6666 13.7713 14.6666 12.6667C14.6666 11.5621 13.7712 10.6667 12.6666 10.6667C11.562 10.6667 10.6666 11.5621 10.6666 12.6667C10.6666 13.7713 11.562 14.6667 12.6666 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeDasharray='0.3 2'
		/>
	</svg>
);
export default SvgFolderSettings;
