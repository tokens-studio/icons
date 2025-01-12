import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgVideoProjector = ({
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
			d='M2.66663 12.6667H3.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 12.6667H13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 10.9334V5.06675C1.33337 4.84583 1.51246 4.66675 1.73337 4.66675H14.2667C14.4876 4.66675 14.6667 4.84583 14.6667 5.06675V10.9334C14.6667 11.1543 14.4876 11.3334 14.2667 11.3334H1.73337C1.51246 11.3334 1.33337 11.1543 1.33337 10.9334Z'
			stroke='currentColor'
		/>
		<path
			d='M3.33337 6.67342L3.34004 6.66602'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 6.67342L5.34004 6.66602'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 6.67342L7.34004 6.66602'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33337 9.33992L3.34004 9.33252'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 9.33992L5.34004 9.33252'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33337 9.33992L7.34004 9.33252'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 9.33341C12.0697 9.33341 12.6667 8.73648 12.6667 8.00008C12.6667 7.26368 12.0697 6.66675 11.3333 6.66675C10.5969 6.66675 10 7.26368 10 8.00008C10 8.73648 10.5969 9.33341 11.3333 9.33341Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgVideoProjector;
