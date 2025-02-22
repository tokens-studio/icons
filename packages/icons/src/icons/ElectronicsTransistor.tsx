import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgElectronicsTransistor = ({
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
			d='M4.66665 10.6667V2.4C4.66665 2.17909 4.84573 2 5.06665 2H10.9333C11.1542 2 11.3333 2.17909 11.3333 2.4V10.6667M4.66665 10.6667H5.99998M4.66665 10.6667H3.33331M11.3333 10.6667H9.99998M11.3333 10.6667H12.6666M5.99998 10.6667H7.99998M5.99998 10.6667V14.6667M9.99998 10.6667H7.99998M9.99998 10.6667V14.6667M7.99998 10.6667V14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgElectronicsTransistor;
