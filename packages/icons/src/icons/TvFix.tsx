import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTvFix = ({
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
			d='M1.33337 13.3334V6.00008C1.33337 5.2637 1.93033 4.66675 2.66671 4.66675H13.3334C14.0698 4.66675 14.6667 5.2637 14.6667 6.00008V13.3334C14.6667 14.0698 14.0698 14.6667 13.3334 14.6667H2.66671C1.93033 14.6667 1.33337 14.0698 1.33337 13.3334Z'
			stroke='currentColor'
		/>
		<path
			d='M9.10466 8.55225L7.21899 10.4378'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.9903 8.55235C10.4695 9.07308 9.62533 9.07308 9.10466 8.55235C8.58393 8.03168 8.58393 7.18741 9.10466 6.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.21899 12.3235C7.73966 11.8028 7.73966 10.9586 7.21899 10.4379C6.69826 9.91718 5.85407 9.91718 5.33337 10.4379'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.66663 1.66675L7.99996 4.00008L10.3333 1.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgTvFix;
