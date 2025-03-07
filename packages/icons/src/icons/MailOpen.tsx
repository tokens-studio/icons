import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMailOpen = ({
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
			d='M4.66663 8L7.99996 10.3333L11.3333 8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33337 13.3333V6.08826C1.33337 5.61991 1.57911 5.1859 1.98071 4.94494L7.31404 1.74494C7.73631 1.4916 8.26377 1.4916 8.68604 1.74494L14.0194 4.94494C14.421 5.1859 14.6667 5.61991 14.6667 6.08826V13.3333C14.6667 14.0697 14.0698 14.6667 13.3334 14.6667H2.66671C1.93033 14.6667 1.33337 14.0697 1.33337 13.3333Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgMailOpen;
