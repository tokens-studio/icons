import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframePosition = ({
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
			d='M11.1199 6.25611L8.30727 9.6313C8.1474 9.82316 7.8526 9.82316 7.69274 9.6313L4.88006 6.25611C4.75645 6.10777 4.75645 5.8923 4.88006 5.74396L7.69274 2.36878C7.8526 2.17688 8.1474 2.17688 8.30727 2.36878L11.1199 5.74396C11.2435 5.8923 11.2435 6.10777 11.1199 6.25611Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 13.3334H8M8 13.3334H14M8 13.3334V11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgKeyframePosition;
