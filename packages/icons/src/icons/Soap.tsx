import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoap = ({
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
			d='M4.66675 7.33341C4.66675 5.86065 5.86065 4.66675 7.33341 4.66675H8.66675C10.1395 4.66675 11.3334 5.86065 11.3334 7.33341V13.6001C11.3334 13.821 11.1543 14.0001 10.9334 14.0001H5.06675C4.84583 14.0001 4.66675 13.821 4.66675 13.6001V7.33341Z'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M4.66675 8.66675H11.3334'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M8 4.66667V2M8 2H6M8 2H8.66667'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgSoap;
