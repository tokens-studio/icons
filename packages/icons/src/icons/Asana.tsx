import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAsana = ({
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
			d='M7.99999 7.66668C9.47273 7.66668 10.6667 6.47277 10.6667 5.00001C10.6667 3.52725 9.47273 2.33334 7.99999 2.33334C6.52723 2.33334 5.33333 3.52725 5.33333 5.00001C5.33333 6.47277 6.52723 7.66668 7.99999 7.66668Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66667 13.6667C6.13943 13.6667 7.33333 12.4727 7.33333 11C7.33333 9.52728 6.13943 8.33334 4.66667 8.33334C3.19391 8.33334 2 9.52728 2 11C2 12.4727 3.19391 13.6667 4.66667 13.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 13.6667C12.8061 13.6667 14 12.4727 14 11C14 9.52728 12.8061 8.33334 11.3333 8.33334C9.86061 8.33334 8.66667 9.52728 8.66667 11C8.66667 12.4727 9.86061 13.6667 11.3333 13.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAsana;
