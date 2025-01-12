import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgThunderstorm = ({
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
			d='M8.66667 8L7 11.3333H11L9.33333 14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.3334 11.7381C15.3292 11.348 16.3334 10.4592 16.3334 8.66659C16.3334 5.99992 14.1112 5.33325 13.0001 5.33325C13.0001 3.99992 13.0001 1.33325 9.00008 1.33325C5.00008 1.33325 5.00008 3.99992 5.00008 5.33325C3.88897 5.33325 1.66675 5.99992 1.66675 8.66659C1.66675 10.4592 2.67093 11.348 3.66675 11.7381'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgThunderstorm;
