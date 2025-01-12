import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlbumList = ({
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
			d='M1.33337 11.6V1.73333C1.33337 1.51241 1.51246 1.33333 1.73337 1.33333H11.6C11.821 1.33333 12 1.51241 12 1.73333V11.6C12 11.8209 11.821 12 11.6 12H1.73337C1.51246 12 1.33337 11.8209 1.33337 11.6Z'
			stroke='currentColor'
		/>
		<path
			d='M5.33337 14.6667H14.2667C14.4876 14.6667 14.6667 14.4876 14.6667 14.2667V5.33333'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M7.33337 8.33333C7.33337 8.8856 6.88564 9.33333 6.33337 9.33333C5.78109 9.33333 5.33337 8.8856 5.33337 8.33333C5.33337 7.78107 5.78109 7.33333 6.33337 7.33333C6.88564 7.33333 7.33337 7.78107 7.33337 8.33333ZM7.33337 8.33333V4.4C7.33337 4.17909 7.51244 4 7.73337 4H8.66671'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgAlbumList;
