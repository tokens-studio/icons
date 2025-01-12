import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgUnity5 = ({
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
			d='M7.78143 13.8572C7.91429 13.944 8.08589 13.944 8.21876 13.8572L14.4078 9.81593C14.5603 9.71633 14.6263 9.52627 14.5683 9.3536L12.19 2.27264C12.1353 2.10975 11.9826 2 11.8108 2H4.14714C3.97455 2 3.82141 2.11071 3.76731 2.2746L1.42987 9.35467C1.37301 9.52693 1.43915 9.71587 1.59101 9.815L7.78143 13.8572Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.66659 4H6.66659L6.33325 7.33333C6.67905 6.73553 7.32539 6.33333 8.06572 6.33333C9.17025 6.33333 10.0657 7.22873 10.0657 8.33333C10.0657 8.88467 9.84259 9.38387 9.48179 9.74567C9.11972 10.1087 8.61892 10.3333 8.06572 10.3333C7.32539 10.3333 6.67905 9.93113 6.33325 9.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgUnity5;
