import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAtom = ({
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
			d='M2.93623 9.07327C2.34345 8.7632 2 8.39493 2 8C2 6.8954 4.68629 6 8 6C11.3137 6 14 6.8954 14 8C14 8.47627 13.5005 8.91367 12.6667 9.2572'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 7.34001L8.00667 7.33261'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.2551 4.00001C11.252 3.31802 11.0799 2.8354 10.7237 2.6539C9.73952 2.15244 7.72212 4.13942 6.21775 7.09194C4.71336 10.0445 4.29164 12.8445 5.27582 13.346C5.62744 13.5251 6.11094 13.3867 6.6558 13'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.40061 2.83442C5.96037 2.57719 5.57145 2.50325 5.27579 2.6539C4.29161 3.15537 4.71332 5.95539 6.21771 8.90793C7.72213 11.8605 9.73946 13.8475 10.7237 13.346C11.5985 12.9003 11.3625 10.6385 10.2427 8.06773'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAtom;
