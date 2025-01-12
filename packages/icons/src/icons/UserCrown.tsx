import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUserCrown = ({
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
			d='M8.00001 8.00008C9.47274 8.00008 10.6667 6.80615 10.6667 5.33341C10.6667 3.86065 9.47274 2.66675 8.00001 2.66675C6.52725 2.66675 5.33334 3.86065 5.33334 5.33341C5.33334 6.80615 6.52725 8.00008 8.00001 8.00008Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33334 13.3333V12.6667C3.33334 10.0893 5.42268 8 8.00001 8C8.71574 8 9.39381 8.16113 10 8.44907'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 14.6667L14.6667 10.6667L12.3333 11.8667L11.3333 10.6667L10.3333 11.8667L8 10.6667L8.66667 14.6667H14Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUserCrown;
