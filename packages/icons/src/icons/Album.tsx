import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlbum = ({
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
			d='M2 13.6V2.4C2 2.17909 2.17909 2 2.4 2H13.6C13.8209 2 14 2.17909 14 2.4V13.6C14 13.8209 13.8209 14 13.6 14H2.4C2.17909 14 2 13.8209 2 13.6Z'
			stroke='currentColor'
		/>
		<path
			d='M8 10.3333C8 10.8856 7.55227 11.3333 7 11.3333C6.44771 11.3333 6 10.8856 6 10.3333C6 9.78107 6.44771 9.33334 7 9.33334C7.55227 9.33334 8 9.78107 8 10.3333ZM8 10.3333V5.06667C8 4.84576 8.17907 4.66667 8.4 4.66667H10'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgAlbum;
