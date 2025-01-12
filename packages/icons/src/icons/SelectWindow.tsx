import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSelectWindow = ({
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
			d='M9.33331 14H2.66665C1.93027 14 1.33331 13.4031 1.33331 12.6667V3.33333C1.33331 2.59695 1.93027 2 2.66665 2H13.3333C14.0697 2 14.6666 2.59695 14.6666 3.33333V10'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M1.33331 4.66663H14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33331 3.34005L3.33998 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33331 3.34005L5.33998 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33331 3.34005L7.33998 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M14.7215 12.2434C15.0507 12.4459 15.0305 12.9388 14.6914 12.9772L12.9804 13.1712L12.2129 14.7127C12.0608 15.0182 11.5907 14.8686 11.513 14.49L10.6762 10.4127C10.6105 10.0927 10.8981 9.89135 11.1763 10.0625L14.7215 12.2434Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgSelectWindow;
