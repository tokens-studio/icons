import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapsTurnRight = ({
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
			d='M2.90974 13.1913L7.77852 8.8635C7.90486 8.75123 8.09512 8.75123 8.22146 8.8635L13.0903 13.1913C13.3437 13.4166 13.138 13.8324 12.8052 13.7676L8.06359 12.8457C8.02159 12.8375 7.97839 12.8375 7.93639 12.8457L3.19482 13.7676C2.86196 13.8324 2.6563 13.4166 2.90974 13.1913Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 4.33337H10.6667C10.6667 4.33337 8 4.33337 8 7.00004'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.3334 5.99996L12.6667 4.33329L10.3334 2.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMapsTurnRight;
