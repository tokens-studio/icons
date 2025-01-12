import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLink = ({
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
			d='M9.33337 7.99836C9.33337 6.33723 7.78871 4.66663 5.9048 4.66663C5.68165 4.66663 4.94607 4.66663 4.76195 4.66663C2.8684 4.66663 1.33337 6.15831 1.33337 7.99836C1.33337 9.58396 2.47319 10.9109 4.00004 11.2476C4.24508 11.3016 4.50008 11.3301 4.76195 11.3301'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.66663 7.99837C6.66663 9.6595 8.21129 11.3301 10.0952 11.3301C10.3184 11.3301 11.054 11.3301 11.238 11.3301C13.1316 11.3301 14.6666 9.83843 14.6666 7.99837C14.6666 6.41277 13.5268 5.08586 12 4.74919C11.7549 4.69515 11.4999 4.66663 11.238 4.66663'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLink;
