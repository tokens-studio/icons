import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlbumCarousel = ({
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
			d='M1.33337 12.9333V3.06667C1.33337 2.84576 1.51246 2.66667 1.73337 2.66667H11.6C11.821 2.66667 12 2.84576 12 3.06667V12.9333C12 13.1543 11.821 13.3333 11.6 13.3333H1.73337C1.51246 13.3333 1.33337 13.1543 1.33337 12.9333Z'
			stroke='currentColor'
		/>
		<path d='M14.6666 4V12' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M7.33337 9.66666C7.33337 10.2189 6.88564 10.6667 6.33337 10.6667C5.78109 10.6667 5.33337 10.2189 5.33337 9.66666C5.33337 9.11439 5.78109 8.66666 6.33337 8.66666C6.88564 8.66666 7.33337 9.11439 7.33337 9.66666ZM7.33337 9.66666V5.73333C7.33337 5.51242 7.51244 5.33333 7.73337 5.33333H8.66671'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgAlbumCarousel;
