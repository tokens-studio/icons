import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBbq = ({
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
			d='M5.66671 9.66666L3.33337 14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 4.00001C5.33337 4.00001 6.00004 3.29248 6.00004 2.66668C6.00004 1.77779 5.33337 1.33334 5.33337 1.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 4.00001C8 4.00001 8.66667 3.29248 8.66667 2.66668C8.66667 1.77779 8 1.33334 8 1.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 4.00001C10.6666 4.00001 11.3333 3.29248 11.3333 2.66668C11.3333 1.77779 10.6666 1.33334 10.6666 1.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M11 11.6667H5' stroke='currentColor' strokeLinejoin='round' />
		<path
			d='M10.3334 9.66666L11.7334 12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3334 14.6667C12.8856 14.6667 13.3334 14.2189 13.3334 13.6667C13.3334 13.1144 12.8856 12.6667 12.3334 12.6667C11.7811 12.6667 11.3334 13.1144 11.3334 13.6667C11.3334 14.2189 11.7811 14.6667 12.3334 14.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.99998 10C10.4427 10 12.447 8.12334 12.6498 5.73317C12.6685 5.51305 12.4876 5.33334 12.2667 5.33334H3.73332C3.5124 5.33334 3.33153 5.51305 3.3502 5.73317C3.55302 8.12334 5.55734 10 7.99998 10Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgBbq;
