import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBitbucket = ({
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
			d='M13.9438 3.11627L12.7105 12.9829C12.6855 13.1831 12.5153 13.3333 12.3135 13.3333H3.68645C3.48472 13.3333 3.31456 13.1831 3.28954 12.9829L2.0562 3.11627C2.02636 2.87753 2.21252 2.66666 2.45312 2.66666H13.5469C13.7875 2.66666 13.9737 2.87753 13.9438 3.11627Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.1667 5.16666L10.5417 10.4801C10.5179 10.6815 10.3472 10.8333 10.1444 10.8333H5.85578C5.65294 10.8333 5.48222 10.6815 5.45852 10.4801L4.88597 5.61339C4.858 5.3756 5.0438 5.16666 5.28323 5.16666H11.1667ZM11.1667 5.16666H13.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgBitbucket;
