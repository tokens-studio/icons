import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSnow = ({
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
		<g clipPath='url(#clip0_1_1387)'>
			<path
				d='M8 8V11.3333M8 11.3333V14.6667M8 11.3333L5 9.66667M8 11.3333L11 13M8 11.3333L11 9.66667M8 11.3333L5 13'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M13.3334 11.7381C14.3292 11.348 15.3334 10.4592 15.3334 8.66659C15.3334 5.99992 13.1112 5.33325 12.0001 5.33325C12.0001 3.99992 12.0001 1.33325 8.00008 1.33325C4.00008 1.33325 4.00008 3.99992 4.00008 5.33325C2.88897 5.33325 0.666748 5.99992 0.666748 8.66659C0.666748 10.4592 1.67093 11.348 2.66675 11.7381'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</g>
		<defs>
			<clipPath id='clip0_1_1387'>
				<rect width={16} height={16} fill='white' />
			</clipPath>
		</defs>
	</svg>
);
export default SvgSnow;
