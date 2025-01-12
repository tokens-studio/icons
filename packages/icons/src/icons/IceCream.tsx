import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgIceCream = ({
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
			d='M9.33332 12V13.3333C9.33332 14.0697 8.73639 14.6667 7.99999 14.6667C7.26359 14.6667 6.66666 14.0697 6.66666 13.3333V12'
			stroke='currentColor'
		/>
		<path d='M3.33334 8H12.6667' stroke='currentColor' />
		<path
			d='M4.66724 11.9996C3.93064 11.9997 3.33334 11.4027 3.33334 10.6661V5.9998C3.33334 3.42246 5.42268 1.33313 8.00001 1.33313C10.5773 1.33313 12.6667 3.42246 12.6667 5.9998V10.6664C12.6667 11.4028 12.0697 11.9998 11.3333 11.9998C9.11128 11.9996 6.88928 11.999 4.66724 11.9996Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgIceCream;
