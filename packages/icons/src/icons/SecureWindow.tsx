import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSecureWindow = ({
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
			d='M8.66668 14H2.66668C1.9303 14 1.33334 13.4031 1.33334 12.6667V3.33333C1.33334 2.59695 1.9303 2 2.66668 2H13.3333C14.0697 2 14.6667 2.59695 14.6667 3.33333V8'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M1.33334 4.66663H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33334 3.34005L3.34001 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33334 3.34005L5.34001 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33334 3.34005L7.34001 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6615 9.41661L14.3651 9.84928C14.5425 9.89434 14.6675 10.0555 14.6621 10.2383C14.5476 14.0772 12.3333 14.6666 12.3333 14.6666C12.3333 14.6666 10.1191 14.0772 10.0046 10.2383C9.99913 10.0555 10.1242 9.89434 10.3015 9.84928L12.0051 9.41661C12.2205 9.36194 12.4461 9.36194 12.6615 9.41661Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSecureWindow;
