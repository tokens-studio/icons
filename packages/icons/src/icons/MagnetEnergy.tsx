import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMagnetEnergy = ({
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
			d='M3.33331 6V10.4938C3.33331 12.7984 5.42265 14.6667 7.99998 14.6667C10.5773 14.6667 12.6666 12.7984 12.6666 10.4938V6'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33331 6H5.33331'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 6H12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.38271 7.66663V10.0404C9.38271 10.7544 8.76365 11.3333 7.99998 11.3333C7.23631 11.3333 6.61725 10.7544 6.61725 10.0404V7.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66665 8.66663H3.33331'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6666 8.66663H9.33331'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
		<path
			d='M7.77782 1.33337L6.66669 3.33337H9.33335L8.22222 5.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMagnetEnergy;
