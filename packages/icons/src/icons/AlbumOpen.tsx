import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAlbumOpen = ({
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
			d='M11 1.46667C14.043 2.08437 16.3333 4.77471 16.3333 8C16.3333 11.2253 14.043 13.9156 11 14.5333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11 6C11.7607 6.18909 12.3333 7.01267 12.3333 8C12.3333 8.98733 11.7607 9.81093 11 10'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.66663 1.33333H8.33329V14.6667H1.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66663 10.3333C3.66663 10.8856 3.21891 11.3333 2.66663 11.3333C2.11434 11.3333 1.66663 10.8856 1.66663 10.3333C1.66663 9.78107 2.11434 9.33334 2.66663 9.33334C3.21891 9.33334 3.66663 9.78107 3.66663 10.3333ZM3.66663 10.3333V5.06667C3.66663 4.84576 3.84571 4.66667 4.06663 4.66667H5.66663'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgAlbumOpen;
